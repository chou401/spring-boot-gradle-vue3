import{b as B,u as D,c as N}from"./role-40e2dcca.js";import{d as q,q as g,B as b,a as o,c as E,x as e,w as t,k as U,r,o as z,e as j,z as v,E as V}from"./index-94373d68.js";const M={key:0},O={class:"dialog-footer"},G=q({__name:"table-form",emits:["refresh"],setup(T,{expose:h,emit:f}){const i=g();let l=g({status:!0});const y=b({name:[{required:!0,message:"请输入部门名称",trigger:"blur"}],code:[{required:!0,message:"请输入角色编码",trigger:"blur"}]}),k=a=>{B(a).then(n=>{l.value=Object.assign({},l.value,n)})},s=b({isShow:!1,title:"新增",id:null}),x=async a=>{s.isShow=!0,s.title="新增",a!=null&&a.id&&(s.id=a.id,s.title="编辑",k(a.id))},d=()=>{s.isShow=!1,s.id=null,l.value={status:!0}},C=async()=>{i.value&&await i.value.validate(a=>{a&&(l.value.id?D(l.value).then(()=>{V.success("操作成功"),d(),f("refresh")}):N(l.value).then(()=>{V.success("操作成功"),d(),f("refresh")}))})};return h({openDialog:x}),(a,n)=>{const m=r("el-input"),c=r("el-form-item"),_=r("el-col"),R=r("el-row"),S=r("el-form"),p=r("el-button"),w=r("el-dialog");return o(s).isShow?(z(),E("div",M,[e(w,{"model-value":!0,"destroy-on-close":"",title:o(s).title,onClose:d},{footer:t(()=>[j("div",O,[e(p,{type:"primary",onClick:C},{default:t(()=>[v("确定")]),_:1}),e(p,{onClick:d},{default:t(()=>[v("取消")]),_:1})])]),default:t(()=>[e(S,{ref_key:"formRef",ref:i,rules:o(y),model:o(l),"label-width":"90px"},{default:t(()=>[e(R,null,{default:t(()=>[e(_,null,{default:t(()=>[e(c,{label:"角色名称",prop:"name"},{default:t(()=>[e(m,{modelValue:o(l).name,"onUpdate:modelValue":n[0]||(n[0]=u=>o(l).name=u),placeholder:"请输入角色名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(_,null,{default:t(()=>[e(c,{label:"角色编码",prop:"code"},{default:t(()=>[e(m,{modelValue:o(l).code,"onUpdate:modelValue":n[1]||(n[1]=u=>o(l).code=u),disabled:!!o(s).id,placeholder:"请输入角色编码"},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(_,null,{default:t(()=>[e(c,{label:"备注"},{default:t(()=>[e(m,{modelValue:o(l).remark,"onUpdate:modelValue":n[2]||(n[2]=u=>o(l).remark=u),autosize:{minRows:2,maxRows:8},type:"textarea",placeholder:"请输入备注"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["title"])])):U("",!0)}}});export{G as _};
