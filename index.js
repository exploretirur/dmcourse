const {onCall,HttpsError}=require('firebase-functions/v2/https');
const admin=require('firebase-admin');
admin.initializeApp();

// Teachers only: set a temporary password for a student.
exports.resetStudentPassword=onCall(async req=>{
  if(!req.auth)throw new HttpsError('unauthenticated','Please log in.');
  const db=admin.firestore();
  const me=await db.doc('users/'+req.auth.uid).get();
  if(!me.exists||me.data().role!=='teacher')throw new HttpsError('permission-denied','Only teachers can reset passwords.');
  const {uid,password}=req.data||{};
  if(typeof uid!=='string'||typeof password!=='string'||password.length<6)
    throw new HttpsError('invalid-argument','A student id and a password of 6+ characters are required.');
  const t=await db.doc('users/'+uid).get();
  if(!t.exists||t.data().role!=='student')throw new HttpsError('failed-precondition','Only student passwords can be reset here.');
  await admin.auth().updateUser(uid,{password});
  await db.doc('users/'+uid).update({mustChange:true});
  return {ok:true};
});
