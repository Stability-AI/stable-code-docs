"use strict";(self.webpackChunkstable_code=self.webpackChunkstable_code||[]).push([[727],{1208:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=a(4848),r=a(8453);const o={sidebar_position:3,title:"Stable Code Finetuning with Axolotl"},l=void 0,i={id:"tutorial-usage/repository_qa",title:"Stable Code Finetuning with Axolotl",description:"",source:"@site/docs/tutorial-usage/repository_qa.mdx",sourceDirName:"tutorial-usage",slug:"/tutorial-usage/repository_qa",permalink:"/docs/tutorial-usage/repository_qa",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-usage/repository_qa.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Stable Code Finetuning with Axolotl"},sidebar:"tutorialSidebar",previous:{title:"VSCode Extension",permalink:"/docs/tutorial-usage/vscode-extension"},next:{title:"Tutorial - Finetuning Stable Code",permalink:"/docs/category/tutorial---finetuning-stable-code"}},s={},c=[];function p(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"%pip install -qU tree_sitter tree_sitter_languages langchain-openai langchain langchain-community faiss-cpu\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import warnings\n\nwarnings.filterwarnings("ignore")\nfrom pprint import pprint\n\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Clone\nrepo_path = "/Users/rlm/Desktop/test_repo"\n# repo = Repo.clone_from("https://github.com/langchain-ai/langchain", to_path=repo_path)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from langchain_community.document_loaders.generic import GenericLoader\nfrom langchain_community.document_loaders.parsers import LanguageParser\n\nloader = GenericLoader.from_filesystem(\n    "./example_data/source_code",\n    glob="*",\n    suffixes=[".py"],\n    parser=LanguageParser(),\n)\ndocs = loader.load()\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from langchain_text_splitters import Language, RecursiveCharacterTextSplitter\n\npython_splitter = RecursiveCharacterTextSplitter.from_language(\n    language=Language.PYTHON, chunk_size=2000, chunk_overlap=200\n)\ntexts = python_splitter.split_documents(docs)\nlen(texts)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from langchain_community.vectorstores import Chroma\nfrom langchain_openai import OpenAIEmbeddings\n\ndb = Chroma.from_documents(texts, OpenAIEmbeddings(disallowed_special=()))\nretriever = db.as_retriever(\n    search_type="mmr",  # Also test "similarity"\n    search_kwargs={"k": 8},\n)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from langchain.chains import ConversationalRetrievalChain\nfrom langchain.memory import ConversationSummaryMemory\nfrom langchain_community.chat_models import ChatOllama\n\nllm = ChatOllama(model="stable-code:zephyr")\nmemory = ConversationSummaryMemory(\n    llm=llm, memory_key="chat_history", return_messages=True\n)\nqa = ConversationalRetrievalChain.from_llm(llm, retriever=retriever, memory=memory)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'question = "How can I initialize a ReAct agent?"\nresult = qa(question)\nresult["answer"]\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import torch\n# Check so there is a gpu available, a T4(free tier) is enough to run this notebook\nassert (torch.cuda.is_available()==True)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'!pip install torch=="2.1.2"\n!pip install -e git+https://github.com/OpenAccess-AI-Collective/axolotl#egg=axolotl\n!pip install flash-attn=="2.5.0"\n!pip install deepspeed=="0.13.1"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import yaml\n\n# Your YAML string\nyaml_string = """\nbase_model: TinyLlama/TinyLlama-1.1B-intermediate-step-1431k-3T\nmodel_type: LlamaForCausalLM\ntokenizer_type: LlamaTokenizer\nis_llama_derived_model: true\n\nload_in_8bit: false\nload_in_4bit: true\nstrict: false\n\ndatasets:\n  - path: mhenrichsen/alpaca_2k_test\n    type: alpaca\ndataset_prepared_path:\nval_set_size: 0.05\noutput_dir: ./qlora-out\n\nadapter: qlora\nlora_model_dir:\n\nsequence_len: 1096\nsample_packing: true\npad_to_sequence_len: true\n\nlora_r: 32\nlora_alpha: 16\nlora_dropout: 0.05\nlora_target_modules:\nlora_target_linear: true\nlora_fan_in_fan_out:\n\nwandb_project:\nwandb_entity:\nwandb_watch:\nwandb_name:\nwandb_log_model:\n\nmlflow_experiment_name: colab-example\n\ngradient_accumulation_steps: 1\nmicro_batch_size: 1\nnum_epochs: 4\nmax_steps: 20\noptimizer: paged_adamw_32bit\nlr_scheduler: cosine\nlearning_rate: 0.0002\n\ntrain_on_inputs: false\ngroup_by_length: false\nbf16: false\nfp16: true\ntf32: false\n\ngradient_checkpointing: true\nearly_stopping_patience:\nresume_from_checkpoint:\nlocal_rank:\nlogging_steps: 1\nxformers_attention:\nflash_attention: false\n\nwarmup_steps: 10\nevals_per_epoch:\nsaves_per_epoch:\ndebug:\ndeepspeed:\nweight_decay: 0.0\nfsdp:\nfsdp_config:\nspecial_tokens:\n\n"""\n\n# Convert the YAML string to a Python dictionary\nyaml_dict = yaml.safe_load(yaml_string)\n\n# Specify your file path\nfile_path = \'test_axolotl.yaml\'\n\n# Write the YAML file\nwith open(file_path, \'w\') as file:\n    yaml.dump(yaml_dict, file)\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Buy using the ! the comand will be executed as a bash command\n!accelerate launch -m axolotl.cli.train /content/test_axolotl.yaml\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Buy using the ! the comand will be executed as a bash command\n!accelerate launch -m axolotl.cli.inference /content/test_axolotl.yaml \\\n    --qlora_model_dir="./qlora-out" --gradio\n'})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>i});var t=a(6540);const r={},o=t.createContext(r);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);