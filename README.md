# PLYOSTRIDE 
**Offline-First Hybrid Athletic Operating System**

Most fitness applications are glorified task lists that trap your training history in proprietary cloud servers. PLYOSTRIDE is engineered differently. It is an offline-first, SQLite-powered athletic operating system designed for deterministic periodization, biomechanical load management, multi-profile data sovereignty, and real-time telemetry.

## Core Architecture
Built strictly with vanilla HTML, CSS, JavaScript, and packaged via Capacitor. All telemetry, biometrics, multi-profile databases, and workout logs are written directly to a local **native SQLite database** on the device, backed by an automated OPFS and IndexedDB persistent auto-vault. **Zero external servers. Zero vendor lock-in.**

## Elite Telemetry & Features
- **Clinical Load Management:** Automated Acute:Chronic Workload Ratio (ACWR) tracking with color-coded safety zones (Sweet Spot vs. Spike Risk) to mathematically prevent overtraining and tendon overload.
- **Deterministic Periodization:** Hardcoded 4:1/3:1 mesocycle auto-deloads, 52-week macrocycle engine, and a 1-Year Race Countdown reverse-engineering calculator.
- **Tendon-First Tracking:** Integrated isometric hold timers (Keith Baar analgesic loading protocol), Arch Guard prehab protocols, and post-session RPE/tendon stiffness check-in gates.
- **Biomechanical Physics:** On-board Reactive Strength Index (RSI) calculator utilizing flight-time physics ($h = g \cdot t^2 / 8$), slow-mo video frame scrubber for Ground Contact Time (GCT), and Karvonen Heart Rate Reserve (HRR) calibration.
- **Gear Degradation & Shoe Rotation:** Odometer tracking for running shoe midsole foam decompression (24h recovery timers) and court shoe jump contact counters.
- **User-Adaptive AI Coach:** Built-in sports-science telemetry advisor providing instant offline guidance, audio metronome (180 SPM run cadence / 2.2 Hz pogo rhythm), and optional cloud Gemini API integration.
- **Multi-Theme UI Studio:** 5 calibrated OLED dark-mode color palettes (PLYOSTRIDE Carbon, Cobalt Velocity, Emerald Bio-Lab, Crimson Apex, and Amethyst Neuro) with Xiaomi HyperOS smooth tactile motion design.
- **Data Sovereignty:** Raw JSON backups, CSV training log exports, clean program template sharing, and multi-profile switching. You own your training data forever.

## Installation (Stable v1.0.0 APK)
PLYOSTRIDE is distributed independently to avoid bureaucratic app store delays and feature censorship.

1. Navigate to the [Releases](../../releases) tab.
2. Download the latest `app-release.apk` (v1.0.0 Stable) file to your Android device.
3. Open the file. Your device will prompt you that the installation is from an "Unknown Source." 
4. Tap **Settings** and toggle **Allow from this source**.
5. *Note on Play Protect:* Google Play Protect may flag the app as an "Unknown Developer." Tap **More Details** -> **Install Anyway** to bypass the warning.

## Data Backup Protocol
Because this app relies entirely on local SQLite storage and persistent device vaults, **your data will be lost if you uninstall the app or lose your phone without backing it up.** Use the System tab in the app to periodically export your database to a `.json` file, bind a local auto-save disk file, or use the encrypted Sync Code. 

## Legal & Medical Disclaimer
PLYOSTRIDE is an athletic tracking tool and biomechanical calculator, not a medical device. The "Rehab" and "Arch Guard" protocols are based on standard strength and conditioning literature. Consult a physician or physical therapist before beginning any high-impact plyometric or rehabilitation program.
