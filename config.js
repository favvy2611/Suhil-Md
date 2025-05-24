const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 
v

global.devs = "2348139598985" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348139598985";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "u are welcomed by me and everyone hereb"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2348139598985";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";
;
global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_41_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY4LFxuICAgICAgICA5NSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk1LFxuICAgICAgICA5MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjksXG4gICAgICAgIDg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDczLFxuICAgICAgICAyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1LFxuICAgICAgICA5MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDczLFxuICAgICAgICAzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYzLFxuICAgICAgICA1NixcbiAgICAgICAgMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNixcbiAgICAgICAgNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjksXG4gICAgICAgIDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDk2LFxuICAgICAgICAxMDksXG4gICAgICAgIDM2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2SG9DNlB2RUFUREZ4dFdrdlZycFZkRW55WXJBZjJSMnhNejlNOFF1SmFzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXVUNiM3pmZFFJS0s2LTRXQmRsd3dBXCIsXG4gIFwicGhvbmVJZFwiOiBcImE1OWM2YjQ2LTQ0ZTQtNGMzNy1iY2E5LTIwNWNmODhmMjUxMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDcwLFxuICAgICAgMjE3LFxuICAgICAgMTI3LFxuICAgICAgODYsXG4gICAgICAyMjYsXG4gICAgICA3NyxcbiAgICAgIDE5NyxcbiAgICAgIDIyNixcbiAgICAgIDEwMyxcbiAgICAgIDIyMCxcbiAgICAgIDg2LFxuICAgICAgNjksXG4gICAgICAxNjksXG4gICAgICAxNzYsXG4gICAgICAxNzUsXG4gICAgICA0OSxcbiAgICAgIDIwMyxcbiAgICAgIDE0NCxcbiAgICAgIDI0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgMjE4LFxuICAgICAgMTU1LFxuICAgICAgMTUzLFxuICAgICAgMTUyLFxuICAgICAgOTYsXG4gICAgICAyMjYsXG4gICAgICAxNDMsXG4gICAgICAxMTUsXG4gICAgICA5OSxcbiAgICAgIDU1LFxuICAgICAgMTAzLFxuICAgICAgMTQxLFxuICAgICAgMzMsXG4gICAgICA3MCxcbiAgICAgIDM3LFxuICAgICAgMSxcbiAgICAgIDExMyxcbiAgICAgIDc1LFxuICAgICAgMTA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTSs4azVJR0VJdTR4Y0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWTld6bUV0VlgzcEJ0bklnYUtzbDZsSTRxL2FaTW0waU81UGdLYi9nVWtRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxhMmRHcjY1SXlHRG1kbUV6UEM5blppRmp0UVZTeWxQZklDUXBBK3ZZZnIxaDNvY1N5cDlQc2Z3NzJqNnpCeGkyazFObVpldVREUUJkeGJsWlArQ0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhQbkxvcjdqVWN0VWE1aE96c0JwSWJUK0JXN241VjEyMDJpbTZKZjE0eDNOS0JEb3hkT0FzV1p0YkFnY0FGRm11Mk1hN2xrejQwRmZ6N1pQUGkxQWlRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzOTU5ODk4NTo5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhpbVwiLFxuICAgIFwibGlkXCI6IFwiNzcyNjY2NDYyNDk1NTg6OTFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM5NTk4OTg1OjkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ4MDY1Mjk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDM1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMMzUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoQVpQb2d1Ky9DUkZ4VkdUdHRXQXYrNUlVMTU5em1Gay8rWU5Da2NmV2dZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDg2ODA1MjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODA2NTMwMjU1MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Him",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
