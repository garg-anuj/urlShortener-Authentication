//! hme whi url show kar wana  hai joh us user ne create kiya hai apne liye
// TODO :-
//  to pehle kya krenge hm user ko url create kare us page pe le jayenge
// mtlb ki user ko login krna hoga tb wo url create kar skega

// jb user login krega tb hmko user ki mongooseId bhi mil skti hai or agr khudki id create kre wo bhi mi skti hai
// toh mtlb jb user pr url create krne ki  permission hogi tb apne paas user ki ID's bhi hongi

// toh wo particular url kisne create kiya hai uske liye hm urlSchema me created by fields me user ki id rkh lenge
// createdBy:{userId} ese  le lenge
// jisse future me userKi id filter karwao or us user ki id par bne sare url show karwa do

// TODO :- JWT AUTHENTICATION
// es branch me hm code krenge for tokene based Authentication ke liye

// last branch tk statefull authentcation kaa use kiya tha jha pr server ke paas ek state mantain krni pdti hai on a backend

// toh pichle branch me problem yeah thi ki agr hmara server restart hota tha to wo state Lost hoo jati thi or sbhi user LogOut
// ho jate the toh user ko dubara login krna pdta tha toh wo problem hm es branch me handle krenge

//  or number 2 statefull authentication joh hota hai woo wo MEMORY INTENSIVE hota hai mtlb wo hmare server ki memory use krta hai
// or server ke paas hmare limited memory hoti hai so make sure hm km se km memory use kre server ki

// to es chij ko solve krne ke liye we have STATE_LESS authentication isme hme name se hi pta chl rha hai ki hmare pass state toh hogi nhi
// then a q rise? jb hmare pass state nhi hai toh hm data kaise rakheneg hm apna  track kaise rakhenge data kaa

// for that hm kya krte hai joh hmara payload hota hai joh tick hai /token hai naa hm isi ke andar ticket koo rkh dete hai

// to simple hme user lenge fir us user or userId ke through hm ek us user ke liye JWT tokens create kar lenge or use user
// ki  cookies me store krwa denge toh jbh user req send krega tbh wo jwt token jayega wo covert krke payload dega
// jisme userName/userId same hoga

// setuserKey( user kaa data lo JWT Token get kro using ,SECRET KEY)
//  getUser(JWT Token dalo , or seckret key dalo) or user kaa data get kro
