# NomiFun Desktop v0.7.6 (รองรับภาษาไทย / Thai Language Support)

A no-holds-barred, fully open-source, local-first super AI workstation.
รุ่นปรับปรุงพิเศษ: เพิ่มการรองรับภาษาไทย (th-TH) เต็มรูปแบบทุกโมดูลในระบบ พร้อมตัวรันแอปพลิเคชัน

### ไฮไลต์การอัปเดต (What's New)
- 🇹🇭 **รองรับภาษาไทยสมบูรณ์ (Complete Thai Localization)**:
  - เพิ่ม Locale `th-TH` ครบทั้ง 33 โมดูลในระบบ (เมนูหลัก, การตั้งค่า, เซสชัน, โหมด Agent, โมเดล, ทักษะ และเครื่องมือ)
  - แปลและขัดเกลาคำสำคัญในหน้าจอหลักให้เป็นธรรมชาติและเข้าใจง่าย
  - สลับภาษาได้ทันทีผ่านเมนูด่วนบน Titlebar ด้านบน และหน้าต่างการตั้งค่าระบบ (Settings > System > Language)
  - รองรับการแสดงผลภาษาไทยร่วมกับคอมโพเนนต์ Arco Design UI
- 🚀 **Desktop Launcher**:
  - รวมสคริปต์เปิดใช้งาน `run-nomifun.bat` ที่ตรวจหาไฟล์ปฏิบัติการอัตโนมัติ
- 🛠️ **Fully Verified**:
  - ผ่านการตรวจ Typecheck, i18n parity check (7,023 คีย์ครบถ้วน) และชุดทดสอบความถูกต้องทั้งหมด

### การติดตั้งและการใช้งาน (Getting Started)
1. โคลนและรันด้วย Bun / Node:
   ```bash
   bun install
   bun run build:ui
   ```
2. เปิดใช้งานเดสก์ท็อปผ่าน `run-nomifun.bat` หรือคอมไพล์ด้วย Rust/Tauri ผ่าน `bun run dev` หรือ `bun run build:fast`

