const Jsl_0x4bcabb=Jsl_0x219d;(function(_0x13b6fc,_0x4ef733){const _0xe4783e=Jsl_0x219d,_0x4640d1=_0x13b6fc();while(!![]){try{const _0xb75c00=parseInt(_0xe4783e(0x221))/0x1*(-parseInt(_0xe4783e(0x1ff))/0x2)+parseInt(_0xe4783e(0x227))/0x3*(parseInt(_0xe4783e(0x20d))/0x4)+-parseInt(_0xe4783e(0x22a))/0x5*(-parseInt(_0xe4783e(0x1f5))/0x6)+parseInt(_0xe4783e(0x239))/0x7+-parseInt(_0xe4783e(0x20b))/0x8+-parseInt(_0xe4783e(0x218))/0x9+-parseInt(_0xe4783e(0x22f))/0xa*(parseInt(_0xe4783e(0x22b))/0xb);if(_0xb75c00===_0x4ef733)break;else _0x4640d1['push'](_0x4640d1['shift']());}catch(_0x34b59b){_0x4640d1['push'](_0x4640d1['shift']());}}}(Jsl_0xdd00,0x935bf));const {readFileSync,writeFileSync,existsSync,promises}=require('fs'),{join}=require(Jsl_0x4bcabb(0x1f8)),{initAuthCreds,BufferJSON,proto,isJidBroadcast,isJidGroup,WAMessageStubType,updateMessageWithReceipt,updateMessageWithReaction,useMultiFileAuthState:baileysMultiFileAuthState}=require(Jsl_0x4bcabb(0x21b)),TIME_TO_DATA_STALE=0x5*0x3c*0x3e8;function makeInMemoryStore(){const _0x53de54=Jsl_0x4bcabb;let _0x50eb4b={},_0xb5ea9a={},_0x2ed60f={'connection':'close'};function _0x39cb53(_0x3c299b,_0x563d60=null){const _0x44006f=Jsl_0x219d;let _0x26f17d=null;if(_0x3c299b&&!_0x563d60){_0x563d60=_0x3c299b;const _0x163dd1=_0x132335=>_0x132335['key']?.['id']==_0x563d60,_0x3634c6=Object[_0x44006f(0x1fd)](_0xb5ea9a)['find'](([,_0x550a7f])=>{const _0xf34302=_0x44006f;return _0x550a7f[_0xf34302(0x230)](_0x163dd1);});_0x26f17d=_0x3634c6?.[0x1]?.['find'](_0x163dd1);}else{_0x3c299b=_0x3c299b?.[_0x44006f(0x20c)]?.();if(!(_0x3c299b in _0xb5ea9a))return null;_0x26f17d=_0xb5ea9a[_0x3c299b]['find'](_0x223fe3=>_0x223fe3['key']['id']==_0x563d60);}return _0x26f17d?_0x26f17d:null;}async function _0x36d60d(_0x16fa75,_0x2105f8){const _0x2083c9=Jsl_0x219d;_0x16fa75=_0x16fa75?.[_0x2083c9(0x20c)]?.();if(!isJidGroup(_0x16fa75))return;if(!(_0x16fa75 in _0x50eb4b))return _0x50eb4b[_0x16fa75]={'id':_0x16fa75};const _0x2c7ad4=!_0x50eb4b[_0x16fa75][_0x2083c9(0x204)]||Date[_0x2083c9(0x202)]()-(_0x50eb4b[_0x16fa75][_0x2083c9(0x203)]||0x0)>TIME_TO_DATA_STALE;if(_0x2c7ad4){const _0x92e6c2=await _0x2105f8?.(_0x16fa75);if(_0x92e6c2)Object[_0x2083c9(0x231)](_0x50eb4b[_0x16fa75],{'subject':_0x92e6c2[_0x2083c9(0x236)],'lastfetch':Date[_0x2083c9(0x202)](),'metadata':_0x92e6c2});}return _0x50eb4b[_0x16fa75][_0x2083c9(0x204)];}function _0x493d4b(_0x2b3016){const _0x57ea2e=Jsl_0x219d,_0x48dc43=_0x39cb53(_0x2b3016);if(!_0x48dc43)return null;return _0x48dc43[_0x57ea2e(0x21e)];}async function _0x33d111(_0x48922c,_0x5eb0cf){const _0x17ce65=Jsl_0x219d;_0x48922c=_0x48922c?.['decodeJid']?.();if(!(_0x48922c in _0x50eb4b))return _0x50eb4b[_0x48922c]={'id':_0x48922c};if(!_0x50eb4b[_0x48922c]['imgUrl']){const _0x534145=await _0x5eb0cf(_0x48922c,_0x17ce65(0x20e))['catch'](()=>_0x17ce65(0x237));if(_0x534145)_0x50eb4b[_0x48922c][_0x17ce65(0x1f4)]=_0x534145;}return _0x50eb4b[_0x48922c][_0x17ce65(0x1f4)];}function _0x49a405(_0xf70b39){const _0x20cc63=Jsl_0x219d;_0xf70b39=_0xf70b39?.[_0x20cc63(0x20c)]?.();if(!(_0xf70b39 in _0x50eb4b))return null;return _0x50eb4b[_0xf70b39];}const _0x339a78=(_0x5b0c42,_0x45bee7,_0x43c877=_0x53de54(0x1f2))=>{const _0x521a2e=_0x53de54;_0x5b0c42=_0x5b0c42?.[_0x521a2e(0x20c)]?.();if(!(_0x5b0c42 in _0xb5ea9a))_0xb5ea9a[_0x5b0c42]=[];delete _0x45bee7['message']?.[_0x521a2e(0x20a)],delete _0x45bee7[_0x521a2e(0x225)]?.['senderKeyDistributionMessage'];const _0x207d6f=_0x39cb53(_0x5b0c42,_0x45bee7['key']['id']);if(_0x207d6f)Object[_0x521a2e(0x231)](_0x207d6f,_0x45bee7);else{if(_0x43c877==_0x521a2e(0x1f2))_0xb5ea9a[_0x5b0c42][_0x521a2e(0x1f6)](_0x45bee7);else _0xb5ea9a[_0x5b0c42]['splice'](0x0,0x0,_0x45bee7);}};function _0x72ffe6(_0x4b5e24,_0x33bbbf={'groupMetadata':()=>null}){const _0x5e82fe=_0x53de54;_0x4b5e24['on'](_0x5e82fe(0x20f),_0x21f13b=>{const _0x44812a=_0x5e82fe;Object[_0x44812a(0x231)](_0x2ed60f,_0x21f13b);}),_0x4b5e24['on'](_0x5e82fe(0x22c),function _0x2b5d4d(_0x253e23){const _0x1f674d=_0x5e82fe;for(const _0x1d18bb of _0x253e23[_0x1f674d(0x217)]){const _0x48935e=_0x1d18bb['id']?.[_0x1f674d(0x20c)]?.();if(!_0x48935e)continue;if(!(_0x48935e in _0x50eb4b))_0x50eb4b[_0x48935e]={..._0x1d18bb,'isChats':!![],..._0x1d18bb[_0x1f674d(0x224)]?{'name':_0x1d18bb[_0x1f674d(0x224)]}:{}};if(_0x1d18bb['name'])_0x50eb4b[_0x48935e][_0x1f674d(0x224)]=_0x1d18bb[_0x1f674d(0x224)];}}),_0x4b5e24['on'](_0x5e82fe(0x1fb),function _0x1fc55c(_0x54406b){const _0xb13057=_0x5e82fe;for(const _0x1c91fb of _0x54406b[_0xb13057(0x201)]){const _0x47cc01=_0x1c91fb['id']?.[_0xb13057(0x20c)]?.();if(!_0x47cc01)continue;_0x50eb4b[_0x47cc01]=Object[_0xb13057(0x231)](_0x50eb4b[_0x47cc01]||{},{..._0x1c91fb,'isContact':!![]});}}),_0x4b5e24['on'](_0x5e82fe(0x1fe),function _0x52cc2e(_0xa85181){const _0x2b9c87=_0x5e82fe;for(const _0x549f09 of _0xa85181[_0x2b9c87(0x207)]){const _0x126da7=_0x549f09[_0x2b9c87(0x21a)][_0x2b9c87(0x205)]?.[_0x2b9c87(0x20c)]?.();if(!_0x126da7)continue;if(!_0x126da7||isJidBroadcast(_0x126da7))continue;if(!(_0x126da7 in _0xb5ea9a))_0xb5ea9a[_0x126da7]=[];const _0x2ef03b=_0x549f09?.[_0x2b9c87(0x21a)]?.['id'],_0xada90e=_0x39cb53(_0x126da7,_0x2ef03b);_0x339a78(_0x126da7,proto[_0x2b9c87(0x222)]['fromObject'](_0x549f09),_0x2b9c87(0x234));}}),_0x4b5e24['on'](_0x5e82fe(0x1f1),function _0x588361(_0x4a1d03){const _0x1e334f=_0x5e82fe;for(const _0x50e4d5 of _0x4a1d03){const _0x1f59f5=_0x50e4d5?.['id']?.[_0x1e334f(0x20c)]?.();if(!_0x1f59f5)continue;_0x50eb4b[_0x1f59f5]=Object[_0x1e334f(0x231)](_0x50eb4b[_0x1f59f5]||{},{'id':_0x1f59f5,..._0x50e4d5,'isContact':!![]});}}),_0x4b5e24['on'](_0x5e82fe(0x235),async function _0x44d064(_0x5e6d1e){const _0x50d02c=_0x5e82fe;await Promise[_0x50d02c(0x21c)](_0x5e6d1e['map'](async _0xdac7ac=>{const _0x26d81f=_0x50d02c,_0x46e154=_0xdac7ac['id']?.[_0x26d81f(0x20c)]?.();if(!_0x46e154||isJidBroadcast(_0x46e154))return;if(!(_0x46e154 in _0x50eb4b))_0x50eb4b[_0x46e154]={'id':_0x46e154,..._0xdac7ac,'isChats':!![]};const _0x105cd3=isJidGroup(_0x46e154);Object['assign'](_0x50eb4b[_0x46e154],{..._0xdac7ac,'isChats':!![]});if(_0x105cd3&&!_0x50eb4b[_0x46e154][_0x26d81f(0x204)])Object[_0x26d81f(0x231)](_0x50eb4b[_0x46e154],{'metadata':await _0x36d60d(_0x46e154,_0x33bbbf['groupMetadata'])});}));}),_0x4b5e24['on'](_0x5e82fe(0x229),function _0xe82b30(_0x1103c1){const _0x34fa54=_0x5e82fe;for(const _0x43ced7 of _0x1103c1){const _0x263e03=_0x43ced7['id']?.[_0x34fa54(0x20c)]?.();if(!_0x263e03)continue;if(!(_0x263e03 in _0x50eb4b))_0x50eb4b[_0x263e03]={'id':_0x263e03,..._0x43ced7,'isChats':!![]};if(_0x43ced7['unreadCount'])_0x43ced7['unreadCount']+=_0x50eb4b[_0x263e03][_0x34fa54(0x1ef)]||0x0;Object[_0x34fa54(0x231)](_0x50eb4b[_0x263e03],{'id':_0x263e03,..._0x43ced7,'isChats':!![]});}}),_0x4b5e24['on'](_0x5e82fe(0x226),function _0x2144e5(_0x1c2932){const _0x5be4e3=_0x5e82fe,_0xb423b9=_0x1c2932['id']?.[_0x5be4e3(0x20c)]?.();if(!_0xb423b9)return;if(!(_0xb423b9 in _0x50eb4b))_0x50eb4b[_0xb423b9]={'id':_0xb423b9,'isContact':!![]};Object[_0x5be4e3(0x231)](_0x50eb4b[_0xb423b9],_0x1c2932);}),_0x4b5e24['on'](_0x5e82fe(0x22d),function _0x273f97(_0x21fc3d){const _0x366410=_0x5e82fe,{messages:_0x5055c7,type:_0x16fefe}=_0x21fc3d;switch(_0x16fefe){case _0x366410(0x1f2):case _0x366410(0x21f):for(const _0x58fbce of _0x5055c7){const _0x5dce59=_0x58fbce['key'][_0x366410(0x205)]?.[_0x366410(0x20c)]?.();if(!_0x5dce59||isJidBroadcast(_0x5dce59))continue;if(_0x58fbce[_0x366410(0x21d)]==WAMessageStubType[_0x366410(0x1f3)])continue;if(!(_0x5dce59 in _0xb5ea9a))_0xb5ea9a[_0x5dce59]=[];const _0x53a09b=_0x39cb53(_0x5dce59,_0x58fbce['key']['id']);_0x339a78(_0x5dce59,proto[_0x366410(0x222)][_0x366410(0x23b)](_0x58fbce));if(_0x16fefe===_0x366410(0x21f)&&!(_0x5dce59 in _0x50eb4b))_0x4b5e24[_0x366410(0x200)]('chats.upsert',[{'id':_0x5dce59,'conversationTimestamp':_0x58fbce[_0x366410(0x22e)],'unreadCount':0x1,'name':_0x58fbce[_0x366410(0x232)]||_0x58fbce[_0x366410(0x1f0)]}]);}break;}}),_0x4b5e24['on'](_0x5e82fe(0x216),function _0x1eedfb(_0x1790dd){const _0x33559c=_0x5e82fe;for(const _0x257c3f of _0x1790dd){const _0x169f80=_0x257c3f[_0x33559c(0x21a)][_0x33559c(0x205)]?.[_0x33559c(0x20c)]?.();if(!_0x169f80)continue;const _0x1d7dbe=_0x257c3f[_0x33559c(0x21a)]['id'];if(!_0x169f80||isJidBroadcast(_0x169f80))continue;if(!(_0x169f80 in _0xb5ea9a))_0xb5ea9a[_0x169f80]=[];const _0x1c933d=_0x39cb53(_0x169f80,_0x1d7dbe);if(!_0x1c933d)return;if(_0x257c3f[_0x33559c(0x233)][_0x33559c(0x21d)]==WAMessageStubType[_0x33559c(0x211)])continue;const _0x466c92=_0xb5ea9a[_0x169f80]['findIndex'](_0x2879bb=>_0x2879bb[_0x33559c(0x21a)]['id']===_0x1d7dbe);Object[_0x33559c(0x231)](_0xb5ea9a[_0x169f80][_0x466c92],_0x257c3f[_0x33559c(0x233)]);}}),_0x4b5e24['on']('groups.update',async function _0x3f8b79(_0x3bf776){const _0x2ea4fa=_0x5e82fe;await Promise['all'](_0x3bf776[_0x2ea4fa(0x1fa)](async _0x30b63d=>{const _0x16204b=_0x2ea4fa,_0x4817ce=_0x30b63d['id']?.[_0x16204b(0x20c)]?.();if(!_0x4817ce)return;const _0x2171d5=isJidGroup(_0x4817ce);if(!_0x2171d5)return;if(!(_0x4817ce in _0x50eb4b))_0x50eb4b[_0x4817ce]={'id':_0x4817ce,..._0x30b63d,'isChats':!![]};if(!_0x50eb4b[_0x4817ce][_0x16204b(0x204)])Object[_0x16204b(0x231)](_0x50eb4b[_0x4817ce],{'metadata':await _0x36d60d(_0x4817ce,_0x33bbbf[_0x16204b(0x1ee)])});Object[_0x16204b(0x231)](_0x50eb4b[_0x4817ce][_0x16204b(0x204)],_0x30b63d);}));}),_0x4b5e24['on'](_0x5e82fe(0x215),async function _0xa04e90(_0x38b7ad){const _0x4d3250=_0x5e82fe,_0x52267e=_0x38b7ad['id']?.[_0x4d3250(0x20c)]?.();if(!_0x52267e||!isJidGroup(_0x52267e))return;if(!(_0x52267e in _0x50eb4b))_0x50eb4b[_0x52267e]={'id':_0x52267e};if(!(_0x52267e in _0x50eb4b)||!_0x50eb4b[_0x52267e]['metadata'])Object[_0x4d3250(0x231)](_0x50eb4b[_0x52267e],{'metadata':await _0x36d60d(_0x52267e,_0x33bbbf[_0x4d3250(0x1ee)])});const _0x561e23=_0x50eb4b[_0x52267e]['metadata'];if(!_0x561e23)return console[_0x4d3250(0x209)]('Try\x20to\x20update\x20group\x20'+_0x52267e+_0x4d3250(0x219));switch(_0x38b7ad[_0x4d3250(0x223)]){case'add':_0x561e23[_0x4d3250(0x213)]['push'](..._0x38b7ad[_0x4d3250(0x213)][_0x4d3250(0x1fa)](_0x398a15=>({'id':_0x398a15,'admin':null})));break;case _0x4d3250(0x210):case _0x4d3250(0x1f7):for(const _0x10d7e3 of _0x561e23[_0x4d3250(0x213)])if(_0x38b7ad['participants'][_0x4d3250(0x208)](_0x10d7e3['id']))_0x10d7e3[_0x4d3250(0x214)]=_0x38b7ad[_0x4d3250(0x223)]===_0x4d3250(0x1f7)?_0x4d3250(0x214):null;break;case _0x4d3250(0x23a):_0x561e23[_0x4d3250(0x213)]=_0x561e23[_0x4d3250(0x213)][_0x4d3250(0x206)](_0x40e18a=>!_0x38b7ad['participants'][_0x4d3250(0x208)](_0x40e18a['id']));break;}Object[_0x4d3250(0x231)](_0x50eb4b[_0x52267e],{'metadata':_0x561e23});}),_0x4b5e24['on'](_0x5e82fe(0x1f9),function _0xc65093(_0x36fc3d){const _0x129caf=_0x5e82fe;for(const {key:_0x413ff6,receipt:_0x5e9ae1}of _0x36fc3d){const _0x299caf=_0x413ff6[_0x129caf(0x205)]?.['decodeJid']?.();if(!_0x299caf)continue;const _0x337ad7=_0x413ff6['id'];if(!(_0x299caf in _0xb5ea9a))_0xb5ea9a[_0x299caf]=[];const _0xf47b72=_0x39cb53(_0x299caf,_0x337ad7);if(!_0xf47b72)return;updateMessageWithReceipt(_0xf47b72,_0x5e9ae1);}}),_0x4b5e24['on'](_0x5e82fe(0x220),function _0x2787f5(_0x310a47){const _0x1a7e32=_0x5e82fe;for(const {key:_0x2c8936,reaction:_0x394e9b}of _0x310a47){const _0x43a171=_0x2c8936[_0x1a7e32(0x205)]?.[_0x1a7e32(0x20c)]?.();if(!_0x43a171)continue;const _0x2295ac=_0x39cb53(_0x43a171,_0x2c8936['id']);if(!_0x2295ac)return;updateMessageWithReaction(_0x2295ac,_0x394e9b);}});}function _0x5782a9(){return{'chats':_0x50eb4b,'messages':_0xb5ea9a};}function _0x4cb42d(_0x25bac7){const _0x1379b1=_0x53de54;Object[_0x1379b1(0x231)](_0x50eb4b,_0x25bac7[_0x1379b1(0x217)]);for(const _0x3d50a1 in _0x25bac7[_0x1379b1(0x207)])_0xb5ea9a[_0x3d50a1]=_0x25bac7[_0x1379b1(0x207)][_0x3d50a1][_0x1379b1(0x1fa)](_0x200d60=>_0x200d60&&proto[_0x1379b1(0x222)][_0x1379b1(0x23b)](_0x200d60))[_0x1379b1(0x206)](_0x37e38b=>_0x37e38b&&_0x37e38b[_0x1379b1(0x21d)]!=WAMessageStubType[_0x1379b1(0x1f3)]);}function _0x3c6eb3(_0x2b514e){const _0x3fb447=_0x53de54;writeFileSync(_0x2b514e,JSON[_0x3fb447(0x1fc)](_0x5782a9(),(_0x59013d,_0x1de7af)=>_0x59013d==_0x3fb447(0x238)?undefined:_0x1de7af,0x2));}function _0x36f74b(_0x550272){const _0x20300c=_0x53de54;if(existsSync(_0x550272)){const _0x3d2bdf=JSON[_0x20300c(0x228)](readFileSync(_0x550272,{'encoding':_0x20300c(0x212)}));_0x4cb42d(_0x3d2bdf);}}return{'chats':_0x50eb4b,'messages':_0xb5ea9a,'state':_0x2ed60f,'loadMessage':_0x39cb53,'fetchGroupMetadata':_0x36d60d,'fetchMessageReceipts':_0x493d4b,'fetchImageUrl':_0x33d111,'getContact':_0x49a405,'bind':_0x72ffe6,'writeToFile':_0x3c6eb3,'readFromFile':_0x36f74b};}function JSONreplacer(_0x601bc1,_0xea9e6e){if(_0xea9e6e==null)return;const _0x380f97=BufferJSON['replacer'](_0x601bc1,_0xea9e6e);return _0x380f97;}function Jsl_0x219d(_0x45245c,_0x5b3a26){const _0xdd0027=Jsl_0xdd00();return Jsl_0x219d=function(_0x219dbc,_0x5af05c){_0x219dbc=_0x219dbc-0x1ee;let _0x268997=_0xdd0027[_0x219dbc];return _0x268997;},Jsl_0x219d(_0x45245c,_0x5b3a26);}module['exports']={'makeInMemoryStore':makeInMemoryStore,'JSONreplacer':JSONreplacer};function Jsl_0xdd00(){const _0x47054c=['@adiwajshing/baileys','all','messageStubType','userReceipt','notify','messages.reaction','542rNLTIY','WebMessageInfo','action','name','message','presence.update','39CkliJL','parse','chats.update','730KrodOE','9367149bePNdE','chats.set','messages.upsert','messageTimestamp','10gwiDAS','find','assign','pushName','update','prepend','chats.upsert','subject','./src/avatar_contact.png','isChats','7831901YvhQdh','remove','fromObject','groupMetadata','unreadCount','verifiedBizName','contacts.update','append','CIPHERTEXT','imgUrl','21474GdCUcj','push','promote','path','message-receipt.update','map','contacts.set','stringify','entries','messages.set','2008zBjRHf','emit','contacts','now','lastfetch','metadata','remoteJid','filter','messages','includes','log','messageContextInfo','4153480rgcMNj','decodeJid','340204dkEPJI','image','connection.update','demote','REVOKE','utf-8','participants','admin','group-participants.update','messages.update','chats','2056905dJxhCY','\x20but\x20metadata\x20not\x20found\x20in\x20\x27group-participants.update\x27','key'];Jsl_0xdd00=function(){return _0x47054c;};return Jsl_0xdd00();}