const Jsl_0x51a4a4=Jsl_0x1975;(function(_0x31da01,_0x340c8b){const _0x923da8=Jsl_0x1975,_0x2dad99=_0x31da01();while(!![]){try{const _0x4d9f77=-parseInt(_0x923da8(0x166))/0x1*(-parseInt(_0x923da8(0x16b))/0x2)+parseInt(_0x923da8(0x131))/0x3+parseInt(_0x923da8(0x141))/0x4+-parseInt(_0x923da8(0x15c))/0x5*(-parseInt(_0x923da8(0x17b))/0x6)+parseInt(_0x923da8(0x16d))/0x7+-parseInt(_0x923da8(0x132))/0x8+parseInt(_0x923da8(0x147))/0x9;if(_0x4d9f77===_0x340c8b)break;else _0x2dad99['push'](_0x2dad99['shift']());}catch(_0x274d27){_0x2dad99['push'](_0x2dad99['shift']());}}}(Jsl_0x4f3e,0x4d81c));const {default:makeWASocket,Browsers,makeInMemoryStore,useSingleFileAuthState}=require(Jsl_0x51a4a4(0x144)),fs=require('fs'),{serialize}=require(Jsl_0x51a4a4(0x168)),{Message,Image,Sticker}=require(Jsl_0x51a4a4(0x18b)),pino=require(Jsl_0x51a4a4(0x195)),express=require(Jsl_0x51a4a4(0x156)),app=express(),port=process[Jsl_0x51a4a4(0x176)][Jsl_0x51a4a4(0x12f)]||0x1f40,path=require(Jsl_0x51a4a4(0x15e)),Config=require(Jsl_0x51a4a4(0x16a)),events=require('./lib/events'),got=require(Jsl_0x51a4a4(0x140)),config=require(Jsl_0x51a4a4(0x16a)),{MakeSession}=require(Jsl_0x51a4a4(0x150)),{PluginDB}=require(Jsl_0x51a4a4(0x14b)),Greetings=require(Jsl_0x51a4a4(0x13e)),store=makeInMemoryStore({'logger':pino()[Jsl_0x51a4a4(0x177)]({'level':Jsl_0x51a4a4(0x186),'stream':Jsl_0x51a4a4(0x159)})});function Jsl_0x1975(_0x4947a2,_0x4520d7){const _0x4f3e10=Jsl_0x4f3e();return Jsl_0x1975=function(_0x197579,_0x26ba2e){_0x197579=_0x197579-0x12f;let _0x4f8b38=_0x4f3e10[_0x197579];return _0x4f8b38;},Jsl_0x1975(_0x4947a2,_0x4520d7);}function Jsl_0x4f3e(){const _0x232082=['228996PydRfq','uncaughtException','url','@adiwajshing/baileys','map','WORK_TYPE','339849lOfBoK','./plugins','./package.json','LOGS','./lib/db/plugins','text','send','split','log','./lib/session','existsSync','replace','Desktop','close','listen','express','stringify','fromMe','store','\x0a𝙼𝙾𝙳𝙴:\x20','extname','13240RXoWda','.js','path','macOS','from','```','messages','name','HANDLERS','creds.update','45AznIrS','parse','./lib/serialize','group-participants.update','./config','11626SBVLQs','\x0a\x0a\x0a\x0a\x0a','230916PZoGYj','messages.upsert','events','toLowerCase','forEach','output','./session.json','type','At\x20:\x20','env','child','@g.us','dataValues','error','606MUHIYY','trim','shift','pattern','commands','\x0aMessage:','./plugins/','imageMessage','notify','photo','./temp/store.json','silent','body','prefix','function','sync','./lib/Base','writeToFile','Plugins\x20Installed!✅','sendMessage','isSelf','Session\x20restore\x20✅','```\u00a0𝙰𝙱𝚄\x20𝙼𝙳\x20𝚁𝚄𝙽𝙽𝙸𝙽𝙶\x0a𝚅𝙴𝚁𝚂𝙸𝙾𝙽\x20:\x20','EventEmitter','\x0a𝙿𝙻𝚄𝙶𝙸𝙽𝚂\x20:\x20','sender','pino','connection.update','PORT','length','670521PqBpnm','4504560PqCLEH','DATABASE','918943027806@s.whatsapp','findAll','groupMetadata','payload','connecting','writeFileSync','subject','test','statusCode','message','./lib/Greetings','Abu-MD\x202.0.1','got'];Jsl_0x4f3e=function(){return _0x232082;};return Jsl_0x4f3e();}require(Jsl_0x51a4a4(0x16f))[Jsl_0x51a4a4(0x192)]['defaultMaxListeners']=0x1f4;!fs[Jsl_0x51a4a4(0x151)](Jsl_0x51a4a4(0x173))&&MakeSession(config['SESSION_ID'],Jsl_0x51a4a4(0x173));async function Jsl(){const _0x2c5b64=Jsl_0x51a4a4;await config[_0x2c5b64(0x133)][_0x2c5b64(0x18a)]();const {state:_0x25bf75,saveState:_0x1fc75a}=useSingleFileAuthState('./session.json',pino({'level':_0x2c5b64(0x186)}));let _0x2c4d76=makeWASocket({'logger':pino({'level':_0x2c5b64(0x186)}),'auth':_0x25bf75,'printQRInTerminal':!![],'generateHighQualityLinkPreview':!![],'browser':Browsers[_0x2c5b64(0x15f)](_0x2c5b64(0x153)),'fireInitQueries':![],'shouldSyncHistoryMessage':![],'downloadHistory':![],'syncFullHistory':![]});store['bind'](_0x2c4d76['ev']),setInterval(()=>{const _0x357800=_0x2c5b64;store[_0x357800(0x18c)](_0x357800(0x185));},0x1e*0x3c*0x3e8),_0x2c4d76['ev']['on']('creds.update',saveCreds),_0x2c4d76['ev']['on'](_0x2c5b64(0x196),async _0x40c325=>{const _0x59fc7e=_0x2c5b64,{connection:_0x3c47a4,lastDisconnect:_0x138713}=_0x40c325;_0x3c47a4===_0x59fc7e(0x138)&&console[_0x59fc7e(0x14f)](_0x59fc7e(0x13f));_0x3c47a4===_0x59fc7e(0x154)&&_0x138713&&_0x138713['error']&&_0x138713[_0x59fc7e(0x17a)]['output']['statusCode']!=0x191&&(console[_0x59fc7e(0x14f)](_0x138713[_0x59fc7e(0x17a)][_0x59fc7e(0x172)][_0x59fc7e(0x137)]),Jsl());if(_0x3c47a4==='open'){console[_0x59fc7e(0x14f)](_0x59fc7e(0x190)),console[_0x59fc7e(0x14f)]('installing\x20plugins\x20✅');let _0xf6a12e=await PluginDB[_0x59fc7e(0x135)]();_0xf6a12e[_0x59fc7e(0x145)](async _0x10e1da=>{const _0x5024ad=_0x59fc7e;if(!fs[_0x5024ad(0x151)](_0x5024ad(0x181)+_0x10e1da[_0x5024ad(0x179)][_0x5024ad(0x163)]+'.js')){console[_0x5024ad(0x14f)](_0x10e1da['dataValues'][_0x5024ad(0x163)]);var _0x2ec494=await got(_0x10e1da[_0x5024ad(0x179)][_0x5024ad(0x143)]);_0x2ec494[_0x5024ad(0x13c)]==0xc8&&(fs[_0x5024ad(0x139)](_0x5024ad(0x181)+_0x10e1da['dataValues'][_0x5024ad(0x163)]+_0x5024ad(0x15d),_0x2ec494[_0x5024ad(0x187)]),require(_0x5024ad(0x181)+_0x10e1da['dataValues'][_0x5024ad(0x163)]+_0x5024ad(0x15d)));}}),fs['readdirSync'](_0x59fc7e(0x148))[_0x59fc7e(0x171)](_0x47dc1a=>{const _0x4a5abf=_0x59fc7e;path[_0x4a5abf(0x15b)](_0x47dc1a)[_0x4a5abf(0x170)]()=='.js'&&require(_0x4a5abf(0x181)+_0x47dc1a);}),console[_0x59fc7e(0x14f)](_0x59fc7e(0x18d));let _0x561026=_0x59fc7e(0x191)+require(_0x59fc7e(0x149))['version']+_0x59fc7e(0x193)+events[_0x59fc7e(0x17f)][_0x59fc7e(0x130)]+_0x59fc7e(0x15a)+config[_0x59fc7e(0x146)]+_0x59fc7e(0x161);_0x2c4d76[_0x59fc7e(0x18e)](_0x2c4d76['user']['id'],{'text':_0x561026});try{_0x2c4d76['ev']['on'](_0x59fc7e(0x165),_0x1fc75a),_0x2c4d76['ev']['on'](_0x59fc7e(0x169),async _0x535625=>{Greetings(_0x535625,_0x2c4d76);}),_0x2c4d76['ev']['on'](_0x59fc7e(0x16e),async _0x314011=>{const _0x1201e2=_0x59fc7e;if(_0x314011['type']!==_0x1201e2(0x183))return;let _0x420f57=_0x314011[_0x1201e2(0x162)][0x0],_0x3f5423=await serialize(JSON[_0x1201e2(0x167)](JSON[_0x1201e2(0x157)](_0x420f57)),_0x2c4d76);if(!_0x3f5423[_0x1201e2(0x13d)])return;let _0x10d966=_0x3f5423[_0x1201e2(0x187)];if(_0x10d966&&config[_0x1201e2(0x14a)])console[_0x1201e2(0x14f)](_0x1201e2(0x175)+(_0x3f5423['from']['endsWith'](_0x1201e2(0x178))?(await _0x2c4d76[_0x1201e2(0x136)](_0x3f5423[_0x1201e2(0x160)]))[_0x1201e2(0x13a)]:_0x3f5423[_0x1201e2(0x160)])+'\x0aFrom\x20:\x20'+_0x3f5423[_0x1201e2(0x194)]+_0x1201e2(0x180)+_0x10d966);events[_0x1201e2(0x17f)][_0x1201e2(0x145)](async _0x4ff1d6=>{const _0x18c259=_0x1201e2;if(_0x4ff1d6[_0x18c259(0x158)]&&!config['SUDO']['split'](',')['includes'](_0x3f5423[_0x18c259(0x194)][_0x18c259(0x14e)]('@')[0x0]||!_0x3f5423[_0x18c259(0x18f)]))return;let _0x5c010b;_0x10d966&&(_0x5c010b=_0x10d966['trim']()[_0x18c259(0x14e)](/ +/)[0x0],_0x3f5423[_0x18c259(0x188)]=new RegExp(config[_0x18c259(0x164)])[_0x18c259(0x13b)](_0x10d966)?_0x10d966[_0x18c259(0x14e)]('')[_0x18c259(0x17d)]():',');if(_0x4ff1d6[_0x18c259(0x17e)]&&_0x4ff1d6['pattern'][_0x18c259(0x13b)](_0x5c010b)){var _0x5d33d4;try{_0x5d33d4=_0x10d966[_0x18c259(0x152)](new RegExp(_0x5c010b,'i'),'')[_0x18c259(0x17c)]();}catch{_0x5d33d4=![];}whats=new Message(_0x2c4d76,_0x3f5423,_0x420f57),_0x4ff1d6['function'](whats,_0x5d33d4,_0x3f5423,_0x2c4d76);}else{if(_0x10d966&&_0x4ff1d6['on']===_0x18c259(0x14c))whats=new Message(_0x2c4d76,_0x3f5423,_0x420f57),_0x4ff1d6[_0x18c259(0x189)](whats,_0x10d966,_0x3f5423,_0x2c4d76,_0x314011);else{if((_0x4ff1d6['on']==='image'||_0x4ff1d6['on']===_0x18c259(0x184))&&_0x3f5423[_0x18c259(0x174)]===_0x18c259(0x182))whats=new Image(_0x2c4d76,_0x3f5423,_0x420f57),_0x4ff1d6['function'](whats,_0x10d966,_0x3f5423,_0x2c4d76,_0x314011,_0x420f57);else _0x4ff1d6['on']==='sticker'&&_0x3f5423['type']==='stickerMessage'&&(whats=new Sticker(_0x2c4d76,_0x3f5423,_0x420f57),_0x4ff1d6[_0x18c259(0x189)](whats,_0x3f5423,_0x2c4d76,_0x314011,_0x420f57));}}});});}catch(_0xa3df11){console['log'](_0xa3df11+_0x59fc7e(0x16c)+JSON[_0x59fc7e(0x157)](msg));}}}),process['on'](_0x2c5b64(0x142),_0x17a0f7=>{const _0x54c059=_0x2c5b64;let _0xdb5ace=_0x54c059(0x134),_0x468f9c=_0x17a0f7['message'];_0x2c4d76[_0x54c059(0x18e)](_0xdb5ace,{'text':_0x468f9c});});}app['get']('/',(_0x8b1344,_0xf91bd4)=>{const _0x3d594e=Jsl_0x51a4a4;_0xf91bd4[_0x3d594e(0x14d)]('Hello\x20World!');}),app[Jsl_0x51a4a4(0x155)](port,()=>console[Jsl_0x51a4a4(0x14f)]('Jsl\x20Server\x20listening\x20on\x20port\x20http://localhost:'+port)),setTimeout(()=>{Jsl();},0x1b58);
