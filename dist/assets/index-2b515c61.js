import{_ as q}from"./index-f1a11641.js";import{g as A,d as L}from"./role-40e2dcca.js";import{_ as M}from"./table-form.vue_vue_type_script_setup_true_lang-971a851e.js";import{_ as X}from"./auth.vue_vue_type_script_setup_true_lang-a03dbbd1.js";import{d as j,q as g,B as D,f as G,w as t,r as a,o as V,x as e,a as n,e as b,z as p,c as H,F as J,k as K,X as O,E as Q}from"./index-94373d68.js";import"./_plugin-vue_export-helper-c27b6911.js";const W=b("span",{class:"search-btn__left"},"查询",-1),Y=b("span",{class:"search-btn__left"},"重置",-1),Z={class:"table-btn-box mb10"},se=j({__name:"index",setup(ee){let r=g({});const w=()=>{c.pageIndex=1,_()},S=()=>{r.value={},c.pageIndex=1,_()},c=D({pageIndex:1,pageSize:10,total:0}),B=o=>{c.pageIndex=o,_()},h=D({data:[]}),_=()=>{A({...c,...r.value}).then(o=>{h.data=o.list||[],c.total=o.total})},R=o=>{O.confirm("是否确认删除本条数据？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>{L(o.id).then(()=>{Q.success("删除成功"),_()})}).catch(()=>{})},x=g(),k=async(o={})=>{await x.value.openDialog(o)},y=g(),z=async o=>{await y.value.openAuthDialog(o)};return _(),(o,s)=>{const C=a("el-input"),m=a("el-form-item"),u=a("el-col"),I=a("ele-search"),f=a("el-icon"),d=a("el-button"),P=a("ele-refresh"),T=a("el-row"),$=a("el-form"),E=a("ele-circle-plus"),i=a("el-table-column"),N=a("el-table"),U=q,F=a("el-card");return V(),G(F,{shadow:"never",class:"card-box"},{default:t(()=>[e($,{model:n(r),"label-width":"90px"},{default:t(()=>[e(T,{gutter:20},{default:t(()=>[e(u,{sm:24,md:12,lg:8,xl:6},{default:t(()=>[e(m,{label:"角色名称"},{default:t(()=>[e(C,{modelValue:n(r).name,"onUpdate:modelValue":s[0]||(s[0]=l=>n(r).name=l),clearable:"",placeholder:"请输入角色名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{sm:24,md:12,lg:8,xl:6},{default:t(()=>[e(m,{label:"角色编码"},{default:t(()=>[e(C,{modelValue:n(r).code,"onUpdate:modelValue":s[1]||(s[1]=l=>n(r).code=l),clearable:"",placeholder:"请输入角色编码"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{sm:24,md:12,lg:8,xl:6},{default:t(()=>[e(m,{"label-width":"0"},{default:t(()=>[e(d,{type:"primary",onClick:w},{default:t(()=>[e(f,null,{default:t(()=>[e(I)]),_:1}),W]),_:1}),e(d,{onClick:S},{default:t(()=>[e(f,null,{default:t(()=>[e(P)]),_:1}),Y]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),b("div",Z,[e(d,{type:"primary",onClick:k},{default:t(()=>[e(f,{class:"mr5"},{default:t(()=>[e(E)]),_:1}),p(" 新 增 ")]),_:1})]),e(N,{data:n(h).data,border:"",style:{width:"100%"},"row-key":"id"},{default:t(()=>[e(i,{prop:"name",label:"角色名称",align:"center"}),e(i,{prop:"code",label:"角色编码",align:"center"}),e(i,{prop:"remark",label:"备注",align:"center"}),e(i,{prop:"createTime",label:"创建时间",align:"center"}),e(i,{label:"操作",fixed:"right",align:"center"},{default:t(({row:l})=>[l.code!=="admin"?(V(),H(J,{key:0},[e(d,{link:"",type:"primary",onClick:v=>k(l)},{default:t(()=>[p(" 修改 ")]),_:2},1032,["onClick"]),e(d,{link:"",type:"primary",onClick:v=>z(l)},{default:t(()=>[p(" 授权 ")]),_:2},1032,["onClick"]),e(d,{onClick:v=>R(l),link:"",type:"danger"},{default:t(()=>[p(" 删除 ")]),_:2},1032,["onClick"])],64)):K("",!0)]),_:1})]),_:1},8,["data"]),e(U,{currentPage:n(c).pageIndex,"onUpdate:currentPage":s[2]||(s[2]=l=>n(c).pageIndex=l),pageSize:n(c).pageSize,"onUpdate:pageSize":s[3]||(s[3]=l=>n(c).pageSize=l),total:n(c).total,onChangePage:B},null,8,["currentPage","pageSize","total"]),e(M,{ref_key:"tableDialogRef",ref:x,onRefresh:_},null,512),e(X,{ref_key:"authDialogRef",ref:y},null,512)]),_:1})}}});export{se as default};
