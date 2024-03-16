"use strict";(self.webpackChunkstable_code=self.webpackChunkstable_code||[]).push([[561],{6432:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(4848),o=t(8453);const l={sidebar_position:3,title:"Stable Code Finetuning with Axolotl"},i=void 0,s={id:"tutorial-finetuning/stable_code_axolotl",title:"Stable Code Finetuning with Axolotl",description:"",source:"@site/docs/tutorial-finetuning/stable_code_axolotl.mdx",sourceDirName:"tutorial-finetuning",slug:"/tutorial-finetuning/stable_code_axolotl",permalink:"/docs/tutorial-finetuning/stable_code_axolotl",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-finetuning/stable_code_axolotl.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Stable Code Finetuning with Axolotl"},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Finetuning Stable Code",permalink:"/docs/category/tutorial---finetuning-stable-code"}},r={},c=[];function d(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import torch\n# Check so there is a gpu available, a T4(free tier) is enough to run this notebook\nassert (torch.cuda.is_available()==True)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'!pip install torch=="2.1.2"\n!pip install -e git+https://github.com/OpenAccess-AI-Collective/axolotl#egg=axolotl\n!pip install flash-attn=="2.5.0"\n!pip install deepspeed=="0.13.1"\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import yaml\n\n# Your YAML string\nyaml_string = """\nbase_model: TinyLlama/TinyLlama-1.1B-intermediate-step-1431k-3T\nmodel_type: LlamaForCausalLM\ntokenizer_type: LlamaTokenizer\nis_llama_derived_model: true\n\nload_in_8bit: false\nload_in_4bit: true\nstrict: false\n\ndatasets:\n  - path: mhenrichsen/alpaca_2k_test\n    type: alpaca\ndataset_prepared_path:\nval_set_size: 0.05\noutput_dir: ./qlora-out\n\nadapter: qlora\nlora_model_dir:\n\nsequence_len: 1096\nsample_packing: true\npad_to_sequence_len: true\n\nlora_r: 32\nlora_alpha: 16\nlora_dropout: 0.05\nlora_target_modules:\nlora_target_linear: true\nlora_fan_in_fan_out:\n\nwandb_project:\nwandb_entity:\nwandb_watch:\nwandb_name:\nwandb_log_model:\n\nmlflow_experiment_name: colab-example\n\ngradient_accumulation_steps: 1\nmicro_batch_size: 1\nnum_epochs: 4\nmax_steps: 20\noptimizer: paged_adamw_32bit\nlr_scheduler: cosine\nlearning_rate: 0.0002\n\ntrain_on_inputs: false\ngroup_by_length: false\nbf16: false\nfp16: true\ntf32: false\n\ngradient_checkpointing: true\nearly_stopping_patience:\nresume_from_checkpoint:\nlocal_rank:\nlogging_steps: 1\nxformers_attention:\nflash_attention: false\n\nwarmup_steps: 10\nevals_per_epoch:\nsaves_per_epoch:\ndebug:\ndeepspeed:\nweight_decay: 0.0\nfsdp:\nfsdp_config:\nspecial_tokens:\n\n"""\n\n# Convert the YAML string to a Python dictionary\nyaml_dict = yaml.safe_load(yaml_string)\n\n# Specify your file path\nfile_path = \'test_axolotl.yaml\'\n\n# Write the YAML file\nwith open(file_path, \'w\') as file:\n    yaml.dump(yaml_dict, file)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Buy using the ! the comand will be executed as a bash command\n!accelerate launch -m axolotl.cli.train /content/test_axolotl.yaml\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# Buy using the ! the comand will be executed as a bash command\n!accelerate launch -m axolotl.cli.inference /content/test_axolotl.yaml \\\n    --qlora_model_dir="./qlora-out" --gradio\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(6540);const o={},l=a.createContext(o);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);