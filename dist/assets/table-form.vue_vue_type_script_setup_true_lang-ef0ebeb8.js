import{d as B,a1 as K,B as H,D as Q,r,o as p,f as g,w as t,x as e,e as P,c as U,F as I,h as N,a2 as h,q as L,a as o,k as W,$ as X,a3 as Y,z as m,a4 as Z,E as A,a5 as ee,t as le}from"./index-94373d68.js";import{S as M}from"./index-d0f8239b.js";import{_ as te}from"./index.vue_vue_type_script_setup_true_lang-8c03ffd8.js";const ae={class:"tab-pane-box"},oe={class:"icon-box"},ne={class:"icon-box"},se=B({__name:"index",props:{value:null},emits:["update:value"],setup(O,{emit:D}){var x;const C=O,v=Object.assign({"/src/assets/svg/dept.svg":()=>h(()=>import("./dept-47a29f09.js"),[],import.meta.url),"/src/assets/svg/menu.svg":()=>h(()=>import("./menu-a38b54e6.js"),[],import.meta.url),"/src/assets/svg/notice.svg":()=>h(()=>import("./notice-700c0435.js"),[],import.meta.url),"/src/assets/svg/role.svg":()=>h(()=>import("./role-6a3e75c9.js"),[],import.meta.url),"/src/assets/svg/theme.svg":()=>h(()=>import("./theme-fbfe1a12.js"),[],import.meta.url)}),R=(x=K())==null?void 0:x.proxy,a=H({value:Q({get:()=>C.value||"",set:c=>{D("update:value",c)}}),localIcons:[],elIcons:R.$icons});for(const c in v)a.localIcons.push("local-"+c.split("/src/assets/svg/")[1].split(".svg")[0]);const S=c=>{a.value=c};return(c,w)=>{const V=r("el-button"),i=r("el-input"),E=r("el-tab-pane"),y=r("el-tabs"),q=r("el-popover");return p(),g(q,{placement:"bottom",width:300,trigger:"click"},{reference:t(()=>[e(i,{modelValue:a.value,"onUpdate:modelValue":w[0]||(w[0]=s=>a.value=s),disabled:"",placeholder:"请选择图标"},{prepend:t(()=>[a.value.indexOf("local")>=0?(p(),g(V,{key:0},{default:t(()=>[e(M,{name:a.value},null,8,["name"])]),_:1})):(p(),g(V,{key:1,icon:a.value},null,8,["icon"]))]),_:1},8,["modelValue"])]),default:t(()=>[P("div",ae,[e(y,{type:"border-card"},{default:t(()=>[e(E,{label:"ele"},{default:t(()=>[P("div",oe,[(p(!0),U(I,null,N(a.elIcons,s=>(p(),g(V,{icon:s,type:a.value===s?"primary":"",onClick:l=>S(s),plain:""},null,8,["icon","type","onClick"]))),256))])]),_:1}),e(E,{label:"本地"},{default:t(()=>[P("div",ne,[(p(!0),U(I,null,N(a.localIcons,s=>(p(),g(V,{type:a.value===s?"primary":"",onClick:l=>S(s),plain:""},{default:t(()=>[e(M,{name:s},null,8,["name"])]),_:2},1032,["type","onClick"]))),256))])]),_:1})]),_:1})])]),_:1})}}});const ue={key:0},de={class:"dialog-footer"},ie=B({__name:"table-form",emits:["refresh"],setup(O,{expose:D,emit:C}){const v=L(),R=[{name:"菜单",id:1},{name:"外链",id:2},{name:"权限",id:3}];let a=L({type:1,isCache:!1,isShow:!0,isHome:!1,status:!0});const S={1:{name:[{required:!0,message:"请输入菜单名称"}],sort:[{required:!0,message:"请输入排序"}],code:[{required:!0,message:"请输入权限标识"}],routeUrl:[{required:!0,message:"请输入路由路径"}],routeName:[{required:!0,message:"请输入路由名称"}],componentPath:[{required:!0,message:"请输入页面路径"}]},2:{name:[{required:!0,message:"请输入菜单名称"}]},3:{name:[{required:!0,message:"请输入权限名称"}],code:[{required:!0,message:"请输入权限标识"}]}},x=()=>{v.value&&v.value.resetFields()},c=L([]),w=()=>{X({}).then(s=>{c.value=s||[]})},V=s=>{Y(s).then(l=>{a.value=Object.assign({},a.value,l)})},i=H({isShow:!1,title:"新增",id:null}),E=async s=>{i.isShow=!0,i.title="新增菜单",await w(),s!=null&&s.id&&(i.id=s.id,i.title="编辑菜单",V(s.id))},y=()=>{i.isShow=!1,i.id=null,a.value={type:1,isCache:!1,isShow:!1,status:!0}},q=async()=>{v.value&&await v.value.validate(s=>{if(s){let l=a.value,b={};a.value.type===1?b={name:l.name,parentId:l.parentId||0,icon:l.icon,type:l.type,code:l.code,status:l.status,sort:l.sort,routeUrl:l.routeUrl,routeName:l.routeName,routeRedirect:l.routeRedirect,componentPath:l.componentPath,isShow:l.isShow,isCache:l.isCache,isHome:l.isHome}:a.value.type===2?b={name:l.name,parentId:l.parentId||0,type:l.type,icon:l.icon,code:l.code,status:l.status,sort:l.sort,isLink:1,isShow:!0,linkUrl:l.linkUrl}:b={name:l.name,parentId:l.parentId||0,code:l.code,type:l.type,status:l.status,sort:l.sort},l.id?Z({id:l.id,...b}).then(()=>{A.success("操作成功"),y(),C("refresh")}):ee(b).then(()=>{A.success("操作成功"),y(),C("refresh")})}})};return D({openDialog:E}),(s,l)=>{const b=r("el-radio-button"),k=r("el-radio-group"),u=r("el-form-item"),d=r("el-col"),F=te,_=r("el-input"),T=se,f=r("el-radio"),j=r("el-row"),z=r("el-form"),$=r("el-button"),G=r("el-dialog");return o(i).isShow?(p(),U("div",ue,[e(G,{"model-value":!0,"destroy-on-close":"",title:o(i).title,onClose:y},{footer:t(()=>[P("div",de,[e($,{type:"primary",onClick:q},{default:t(()=>[m("确定")]),_:1}),e($,{onClick:y},{default:t(()=>[m("取消")]),_:1})])]),default:t(()=>[e(z,{ref_key:"formRef",ref:v,rules:S[o(a).type],model:o(a),"validate-on-rule-change":!1,"label-width":"90px"},{default:t(()=>[e(j,null,{default:t(()=>[e(d,{span:12},{default:t(()=>[e(u,{label:"类型"},{default:t(()=>[e(k,{modelValue:o(a).type,"onUpdate:modelValue":l[0]||(l[0]=n=>o(a).type=n),onChange:x},{default:t(()=>[(p(),U(I,null,N(R,(n,J)=>e(b,{key:J,label:n.id},{default:t(()=>[m(le(n.name),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(u,{label:"上级菜单"},{default:t(()=>[e(F,{value:o(a).parentId,"onUpdate:value":l[1]||(l[1]=n=>o(a).parentId=n),options:o(c),placeholder:"请选择上级菜单"},null,8,["value","options"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(u,{label:"排序",prop:"sort"},{default:t(()=>[e(_,{modelValue:o(a).sort,"onUpdate:modelValue":l[2]||(l[2]=n=>o(a).sort=n),type:"number",placeholder:"请输入排序"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(u,{label:"权限标识",prop:"code"},{default:t(()=>[e(_,{modelValue:o(a).code,"onUpdate:modelValue":l[3]||(l[3]=n=>o(a).code=n),placeholder:"请输入权限标识"},null,8,["modelValue"])]),_:1})]),_:1}),o(a).type===2?(p(),U(I,{key:0},[e(d,{span:12},{default:t(()=>[e(u,{label:"图标"},{default:t(()=>[e(T,{value:o(a).icon,"onUpdate:value":l[4]||(l[4]=n=>o(a).icon=n)},null,8,["value"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(u,{label:"外链菜单",prop:"name"},{default:t(()=>[e(_,{modelValue:o(a).name,"onUpdate:modelValue":l[5]||(l[5]=n=>o(a).name=n),placeholder:"请输入外链菜单名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(u,{label:"链接地址",prop:"name"},{default:t(()=>[e(_,{modelValue:o(a).linkUrl,"onUpdate:modelValue":l[6]||(l[6]=n=>o(a).linkUrl=n),placeholder:"请输入链接地址"},null,8,["modelValue"])]),_:1})]),_:1})],64)):o(a).type===3?(p(),g(d,{key:1,span:12},{default:t(()=>[e(u,{label:"权限名称",prop:"name"},{default:t(()=>[e(_,{modelValue:o(a).name,"onUpdate:modelValue":l[7]||(l[7]=n=>o(a).name=n),placeholder:"请输入权限名称"},null,8,["modelValue"])]),_:1})]),_:1})):(p(),U(I,{key:2},[e(d,{span:12},{default:t(()=>[e(u,{label:"菜单名称",prop:"name"},{default:t(()=>[e(_,{modelValue:o(a).name,"onUpdate:modelValue":l[8]||(l[8]=n=>o(a).name=n),placeholder:"请输入菜单名称（如：菜单管理）"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(u,{label:"路由路径",prop:"routeUrl"},{default:t(()=>[e(_,{modelValue:o(a).routeUrl,"onUpdate:modelValue":l[9]||(l[9]=n=>o(a).routeUrl=n),placeholder:"请输入路由路径（如：/menu）"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(u,{label:"路由名称",prop:"routeName"},{default:t(()=>[e(_,{modelValue:o(a).routeName,"onUpdate:modelValue":l[10]||(l[10]=n=>o(a).routeName=n),placeholder:"请输入路由名称（如：Menu）"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(u,{label:"路由重定向"},{default:t(()=>[e(_,{modelValue:o(a).routeRedirect,"onUpdate:modelValue":l[11]||(l[11]=n=>o(a).routeRedirect=n),placeholder:"请输入路由重定向（如：/system）"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(u,{label:"页面路径",prop:"componentPath"},{default:t(()=>[e(_,{modelValue:o(a).componentPath,"onUpdate:modelValue":l[12]||(l[12]=n=>o(a).componentPath=n),placeholder:"请输入页面路径（如：system/menu/index）"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(u,{label:"图标"},{default:t(()=>[e(T,{value:o(a).icon,"onUpdate:value":l[13]||(l[13]=n=>o(a).icon=n)},null,8,["value"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(u,{label:"是否显示"},{default:t(()=>[e(k,{modelValue:o(a).isShow,"onUpdate:modelValue":l[14]||(l[14]=n=>o(a).isShow=n)},{default:t(()=>[e(f,{label:!0,border:""},{default:t(()=>[m("是")]),_:1}),e(f,{label:!1,border:""},{default:t(()=>[m("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(u,{label:"是否缓存"},{default:t(()=>[e(k,{modelValue:o(a).isCache,"onUpdate:modelValue":l[15]||(l[15]=n=>o(a).isCache=n)},{default:t(()=>[e(f,{label:!0,border:""},{default:t(()=>[m("是")]),_:1}),e(f,{label:!1,border:""},{default:t(()=>[m("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(d,{span:12},{default:t(()=>[e(u,{label:"是否首页"},{default:t(()=>[e(k,{modelValue:o(a).isHome,"onUpdate:modelValue":l[16]||(l[16]=n=>o(a).isHome=n)},{default:t(()=>[e(f,{label:!0,border:""},{default:t(()=>[m("是")]),_:1}),e(f,{label:!1,border:""},{default:t(()=>[m("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)),e(d,{span:12},{default:t(()=>[e(u,{label:"状态"},{default:t(()=>[e(k,{modelValue:o(a).status,"onUpdate:modelValue":l[17]||(l[17]=n=>o(a).status=n)},{default:t(()=>[e(f,{label:!0,border:""},{default:t(()=>[m("启用")]),_:1}),e(f,{label:!1,border:""},{default:t(()=>[m("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["title"])])):W("",!0)}}});export{ie as _};
