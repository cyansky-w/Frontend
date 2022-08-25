import tracker from "../utils/tracker";
export function hash(hash:boolean){
    if(hash){
        window.addEventListener('hashchange',(e)=>{
            setTimeout(() => {
                tracker.send({
                    type: "popstate",
                    newURL: e.newURL,
                    oldURL:e.oldURL
                  });
            }, 100);
            
          }, false);
    }else{
        window.addEventListener('popstate',(e)=>{ 
            tracker.send({
              type: "popstate",
              current: e.state.current,
              back:e.state.back,
              forward:e.state.forward
            });
          }, false);
    }
}