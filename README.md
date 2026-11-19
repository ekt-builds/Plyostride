# ⚡ Plyostride: Hybrid Athlete Operating System (v2.0.0)

**Plyostride** is a high-performance, offline-first Progressive Web App (PWA) and Android APK designed for hybrid athletes who refuse to compromise between endurance running speed and explosive vertical jump power. 

Built with zero-framework vanilla HTML/CSS/JavaScript and local SQLite/OPFS persistence, Plyostride bridges the gap between sports science analytics and daily execution.

---

## 🚀 Core Features & Architecture

* **52-Week Periodized Hybrid Engine:** Automatically scales running mileage (Zone 2 aerobic base to race pace) alongside plyometric drop and approach jump progressions.
* **Tendon Guard & Auto-Regulation:** Dynamic sensitivity triggers (Keith Baar analgesic loading protocols) that automatically swap high-impact depth jumps to isometrics if tendon stiffness spikes ($\ge 4/10$).
* **ACWR & Recovery Analytics:** Real-time Acute-to-Chronic Workload Ratio tracking, 24-hour foam decompression countdowns, and Mi Fitness-inspired training effect rings.
* **Offline-First Hardware Vault:** Local SQLite (`@capacitor-community/sqlite`), OPFS (Origin Private File System), and IndexedDB data persistence with multi-profile switching, CSV training exports, and zero-account JSON backups.
* **Standalone Hardware Engines:** 
  * **Haptics Engine (`v1.0`):** Crisp hardware-grade vibration pulses for rest countdown ticks and set completions via Capacitor.
  * **Audio Engine (`v9.7`):** Smooth Web Audio API synthesizer beeps with a built-in hardware dynamics compressor and anti-pop envelope (zero speech synthesis overhead).
* **Daily Scripture Integration:** Curated endurance-focused Bible verses with dynamic reflection taps.
* **5 Curated OLED GUI Themes:** Carbon (Default OLED Black), Cobalt Velocity, Emerald Bio-Lab, Crimson Apex, and Amethyst Neuro with a built-in Squircle App Logo Studio.

---

## 🛠️ Tech Stack
* **Frontend:** Vanilla HTML5, CSS3, Modern JavaScript (ESM).
* **Mobile Wrapper:** Capacitor (`@capacitor/core`, `@capacitor/android`, `@capacitor/haptics`, `@capacitor-community/sqlite`).
* **Storage:** LocalStorage, OPFS, IndexedDB, and Native Android SQLite.

---

## 📱 Installation & Deployment

1. Head over to the **[GitHub Releases](https://github.com/plyostrideos/plyostrideos.github.io/releases)** page.
2. Download the latest `plyostride-v2.0.0-release.apk` binary.
3. Install the APK directly on your Android device (Android 8.0+).
4. Verify your local SQLite vault connection under the **Data** tab.

---

## 📄 License & Privacy
Distributed under an open-source license. Plyostride operates with **zero external trackers, zero advertising SDKs, and zero cloud lock-in**. Your biometrics stay 100% on your device.
