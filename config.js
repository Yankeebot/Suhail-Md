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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348160057617";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_11_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc0LFxuICAgICAgICAzLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDM3LFxuICAgICAgICA2NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4LFxuICAgICAgICA4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDk1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MixcbiAgICAgICAgMyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA4NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAzNixcbiAgICAgICAgMTI2LFxuICAgICAgICA4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgODcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDg2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImVTUkhzSGdXTjdLVUJia0sxSXJJYlhlZm8xcGh5bmllWVM4YlQ0eVRGQTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJRcjE3RE1PU0xlNUtYOG5sX1RuYmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmIzZmU3ODMtMGI5NS00ZjcxLWFmZmEtNTFkMDFkZTMxZWEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NyxcbiAgICAgIDcyLFxuICAgICAgMTM3LFxuICAgICAgMjM3LFxuICAgICAgMixcbiAgICAgIDkxLFxuICAgICAgMTYsXG4gICAgICA1MCxcbiAgICAgIDExNCxcbiAgICAgIDMsXG4gICAgICAzMyxcbiAgICAgIDEzNyxcbiAgICAgIDIxOSxcbiAgICAgIDI1MSxcbiAgICAgIDEyMCxcbiAgICAgIDEyMCxcbiAgICAgIDIzMCxcbiAgICAgIDIyLFxuICAgICAgMjUyLFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MixcbiAgICAgIDIwLFxuICAgICAgMTEwLFxuICAgICAgMTI0LFxuICAgICAgMjIzLFxuICAgICAgMzYsXG4gICAgICA1NyxcbiAgICAgIDI1MyxcbiAgICAgIDE4MSxcbiAgICAgIDEzMCxcbiAgICAgIDEyNixcbiAgICAgIDM0LFxuICAgICAgMjA0LFxuICAgICAgMTMsXG4gICAgICAxNTMsXG4gICAgICAyMjgsXG4gICAgICA0NixcbiAgICAgIDE4OSxcbiAgICAgIDY0LFxuICAgICAgMTI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZCMlRGSFlMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM0MTcxNTE1OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NzUxNDQ1NDk4NjgyNjozOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLSEMyTnNGRUphaDFiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhNM2xacjhuWjFFUTdzS0FVeGY1NHpCSlVPUW5uYlhSRzhnVGwxcFJWaXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicnVKRFIzVjF2SGpydlgrQnhPQ2xYcUw2N0syZ1ZtbjRtR2s4YjFRQUMwak92L1FGRE1Ib2JqOGQ0T1IwVlhoRnZQeHRSZWJSSVp6VDJiaUNFcUg5RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiREZ0WWpVejVCOW1KQWxzTnhIcmRQTDBTcHFZdkNQcjRRVzcrQktsUFhUYWNWVXVrcHhLazJYMDVvZERTeDZXY0hOM2dVR1BFT0I3RW9aeW45eEVIZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzNDE3MTUxNTozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzE1ODY4MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
