const yaml = require('js-yaml');
const fs = require('fs');
const https = require('https');

// URLs
const sourceURL = 'https://raw.githubusercontent.com/rime/rime-cantonese/main/jyut6ping3.words.dict.yaml';
const oldSourceURL = 'https://raw.githubusercontent.com/rime/rime-cantonese/d67d17f5d9f5935215ca47f9e13a85ff6cd82fcb/jyut6ping3.dict.yaml';

// Helper function to make HTTP requests
const getRequest = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                resolve({
                    status: res.statusCode,
                    data: data
                });
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
};

// Main function to update dictionary
const main = async () => {
    console.log('🚀 Starting dictionary update process...');
    
    let wordbank_result = [];
    let duplicate_result = [];
    let pronounciation = {};
    let correct_answer = [];
    let source_list = {};
    let source_pending = [];
    let initial_list = {};
    let final_list = {};
    let answer_list = [];

    try {
        // Get current candle dictionary from local file
        console.log('📖 Reading current candle dictionary...');
        try {
            // Read the dictionary file and extract the array
            const dictionaryContent = fs.readFileSync('../src/dictionaries/dictionary.js', 'utf8');
            // Find the array content between the brackets
            const startIndex = dictionaryContent.indexOf('[');
            const endIndex = dictionaryContent.lastIndexOf(']');
            if (startIndex !== -1 && endIndex !== -1) {
                const arrayContent = dictionaryContent.substring(startIndex, endIndex + 1);
                answer_list = JSON.parse(arrayContent);
                console.log(`✅ Found ${answer_list.length} existing dictionary entries`);
            } else {
                console.log('❌ Failed to find array in dictionary.js file');
                return;
            }
        } catch (error) {
            console.log('❌ Failed to read dictionary.js file:', error.message);
            return;
        }

        // Get new source data
        console.log('🔄 Fetching latest rime-cantonese data...');
        const sourceRes = await getRequest(sourceURL);
        if (sourceRes.status === 200) {
            const sourceData = await yaml.loadAll(sourceRes.data, 'utf-8');
            const list = sourceData[1].split(' ');
            let previous_index = 0;
            
            for (let i = 0; i < list.length; i++) {
                const current_block = list[i];
                if (current_block.includes('\t')) {
                    if (previous_index + 4 === i) {
                        const wordInfo = list[previous_index].split('\t');
                        const idiom = wordInfo[0];
                        const first = wordInfo[1];
                        if (idiom.length === 4) {
                            if (!source_list[idiom]) {
                                source_pending.push(idiom);
                                source_list[idiom] = {
                                    w0: first,
                                    w1: list[previous_index + 1],
                                    w2: list[previous_index + 2],
                                    w3: list[previous_index + 3],
                                };
                            }
                        }
                    }
                    previous_index = i;
                }
            }
            console.log(`✅ Processed ${source_pending.length} new words from rime-cantonese`);
        } else {
            console.log('❌ Failed to fetch rime-cantonese data');
            return;
        }

        // Get old source data as backup
        console.log('📚 Fetching backup rime-cantonese data...');
        const oldsourceRes = await getRequest(oldSourceURL);
        if (oldsourceRes.status === 200) {
            console.log('✅ Getting the old resource');
            const wordList = oldsourceRes.data.split('\n');
            const keyword = '# 詞彙';
            let keyword_index = -1;
            
            for (let i = 0; i < wordList.length; i++) {
                if (wordList[i] === keyword) {
                    keyword_index = i + 1;
                    break;
                }
            }
            
            wordList.splice(0, keyword_index);
            for (let i = 0; i < wordList.length; i++) {
                const wordSplit = wordList[i].split(' ');
                if (wordSplit.length === 4) {
                    const wordInfo = wordSplit[0].split('\t');
                    const idiom = wordInfo[0];
                    const first = wordInfo[1];
                    if (idiom.length === 4) {
                        if (!source_list[idiom]) {
                            source_pending.push(idiom);
                            source_list[idiom] = {
                                w0: first,
                                w1: wordSplit[1],
                                w2: wordSplit[2],
                                w3: wordSplit[3],
                            };
                        }
                    }
                }
            }
        }

        // Process words into wordbank format
        console.log('🔧 Processing words into wordbank format...');
        for (let i = 0; i < source_pending.length; i++) {
            const idiom = source_pending[i];
            const tone_info = source_list[idiom];
            let item = {
                idiom: idiom,
            };
            
            for (let j = 0; j < 4; j++) {
                const current_word = tone_info[`w${j}`];
                const tone = current_word.charAt(current_word.length - 1);
                const sound = current_word.substring(0, current_word.length - 1);
                let initial = current_word.charAt(0);
                
                if (sound.startsWith('gw')) {
                    initial = 'gw';
                } else if (sound.startsWith('kw')) {
                    initial = 'kw';
                } else if (sound === 'ng' || sound === 'oi') {
                    initial = '';
                } else if (sound.startsWith('ng')) {
                    initial = 'ng';
                }
                
                let final = sound.replace(initial, '');
                if (final.includes('\t0%')) {
                    final = final.replace('\t0%', '');
                }

                item[`w${j}`] = {
                    initial: initial,
                    final: final,
                    tone: tone,
                };

                if (!initial_list[initial]) {
                    initial_list[initial] = true;
                }
                if (!final_list[final]) {
                    final_list[final] = true;
                }
            }
            wordbank_result.push(item);
        }

        // Add existing answer words to wordbank
        for (let i = 0; i < answer_list.length; i++) {
            const word = wordbank_result.find(s => s.idiom === answer_list[i].idiom);
            if (!word) {
                wordbank_result.push(answer_list[i]);
            }
        }

        console.log(`📊 Wordbank length: ${wordbank_result.length}`);

        // Find duplicates
        console.log('🔍 Finding duplicate entries...');
        for (let i = 0; i < wordbank_result.length; i++) {
            const current = wordbank_result[i];
            for (let j = 0; j < wordbank_result.length; j++) {
                if (i === j) continue;
                if (i < j) continue;
                const s = wordbank_result[j];
                let can_skip = false;
                
                for (let k = 0; k < 4; k++) {
                    if (s[`w${k}`].initial !== current[`w${k}`].initial) {
                        can_skip = true;
                        break;
                    }
                    if (s[`w${k}`].final !== current[`w${k}`].final) {
                        can_skip = true;
                        break;
                    }
                    if (s[`w${k}`].tone !== current[`w${k}`].tone) {
                        can_skip = true;
                        break;
                    }
                }
                
                if (!can_skip) {
                    duplicate_result.push({
                        idiom: current.idiom,
                        idiom2: s.idiom,
                        w0: current.w0,
                        w1: current.w1,
                        w2: current.w2,
                        w3: current.w3,
                    });
                }
            }
        }

        console.log(`🔍 Duplicate length: ${duplicate_result.length}`);

        // Generate pronunciation mappings
        console.log('🔊 Generating pronunciation mappings...');
        for (let i = 0; i < wordbank_result.length; i++) {
            const word = wordbank_result[i];
            const idiom = word.idiom;
            for (let j = 0; j < 4; j++) {
                const pronounce = word[`w${j}`];
                const tone = pronounce.initial + pronounce.final + pronounce.tone;
                const letter = idiom.charAt(j);
                if (!pronounciation[tone]) {
                    pronounciation[tone] = [letter];
                } else {
                    const exist = pronounciation[tone].find(s => s === letter);
                    if (!exist) {
                        pronounciation[tone].push(letter);
                    }
                }
            }
        }

        // Generate correct answers
        for (let i = 0; i < answer_list.length; i++) {
            const word = wordbank_result.find(s => s.idiom === answer_list[i].idiom);
            correct_answer.push(word);
        }

        console.log(`📚 Dictionary length: ${correct_answer.length}`);

        // Write output files
        console.log('💾 Writing output files...');
        fs.writeFileSync('../output/wordbank.json', JSON.stringify(wordbank_result, null, 4));
        fs.writeFileSync('../output/initial.json', JSON.stringify(initial_list, null, 4));
        fs.writeFileSync('../output/final.json', JSON.stringify(final_list, null, 4));
        fs.writeFileSync('../output/duplicates.json', JSON.stringify(duplicate_result, null, 4));
        fs.writeFileSync('../output/pronounciation.json', JSON.stringify(pronounciation, null, 4));
        fs.writeFileSync('../output/dictionary.json', JSON.stringify(correct_answer, null, 4));

        // Update all dictionary files
        console.log('📝 Updating dictionary files...');
        
        // Update dictionary.js
        const dictionaryContent = `const dictionary = ${JSON.stringify(correct_answer, null, 2)};

export default dictionary`;
        fs.writeFileSync('../src/dictionaries/dictionary.js', dictionaryContent);
        
        // Update wordbank.js
        const wordbankContent = `const wordbank = ${JSON.stringify(wordbank_result, null, 2)};

export default wordbank`;
        fs.writeFileSync('../src/dictionaries/wordbank.js', wordbankContent);
        
        // Update duplicates.js
        const duplicatesContent = `const duplicates = ${JSON.stringify(duplicate_result, null, 2)};

export default duplicates`;
        fs.writeFileSync('../src/dictionaries/duplicates.js', duplicatesContent);
        
        // Update pronunciation.js
        const pronunciationContent = `const pronunciation = ${JSON.stringify(pronounciation, null, 2)};

export default pronunciation`;
        fs.writeFileSync('../src/dictionaries/pronunciation.js', pronunciationContent);

        console.log('✅ Dictionary update completed successfully!');
        console.log(`📊 Final stats:`);
        console.log(`   - Wordbank: ${wordbank_result.length} words`);
        console.log(`   - Dictionary: ${correct_answer.length} entries`);
        console.log(`   - Duplicates: ${duplicate_result.length} pairs`);
        console.log(`   - Initials: ${Object.keys(initial_list).length} sounds`);
        console.log(`   - Finals: ${Object.keys(final_list).length} sounds`);

    } catch (error) {
        console.error('❌ Error during dictionary update:', error);
        process.exit(1);
    }
};

// Run the main function
main();
