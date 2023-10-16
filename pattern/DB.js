var {getClient} =require ('../database/index')

function DB(){
    return{
        collection: (params)=>{
            try{
                const db=getClient().db('mydb');
                const collection =db.collection(params);
                return collection;
            }
            catch(err){
                console.log(err);
            }
        }     
    }
}

module.exports= {DB};
