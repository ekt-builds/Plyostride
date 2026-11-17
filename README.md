# PLYOSTRIDE 
**Offline-First Athletic Periodization Engine**

Most fitness applications are glorified task lists that trap your training history in proprietary cloud servers. PLYOSTRIDE is engineered differently. It is an offline-first, SQLite-powered athletic operating system designed for deterministic periodization, biomechanical load management, and total data sovereignty.

## Core Architecture
Built strictly with vanilla HTML, CSS, JavaScript, and packaged via Capacitor. All telemetry, biometrics, and workout logs are written directly to a local SQLite database on the device. **Zero external servers. Zero vendor lock-in.**

## Elite Telemetry & Features
* **Clinical Load Management:** Automated tracking of the Acute:Chronic Workload Ratio (ACWR) to mathematically prevent overtraining and tendon overload.
* **Deterministic Periodization:** Hardcoded 4:1 mesocycle auto-deloads and 1-Year Race Countdown engines.
* **Tendon-First Tracking:** Integrated isometric hold timers, Arch Guard protocols, and post-session tendon check-ins for patellar and Achilles resilience.
* **Biomechanical Physics:** On-board Reactive Strength Index (RSI) calculator utilizing flight-time physics ($h = g \cdot t^2 / 8$), and Karvonen Heart Rate Reserve (HRR) calibration.
* **Gear Degradation:** Mileage telemetry for running shoe midsole foam to prevent impact-related tibial stress.
* **Data Sovereignty:** Raw JSON and CSV import/export capabilities. You own your training data forever.

## Installation (Independent APK)
PLYOSTRIDE is distributed independently to avoid bureaucratic app store delays and feature censorship.

1. Navigate to the [Releases](../../releases) tab.
2. Download the latest `app-release.apk` file to your Android device.
3. Open the file. Your device will prompt you that the installation is from an "Unknown Source." 
4. Tap **Settings** and toggle **Allow from this source**.
5. *Note on Play Protect:* Google Play Protect may flag the app as an "Unknown Developer." Tap **More Details** -> **Install Anyway** to bypass the warning.

## Data Backup Protocol
Because this app relies entirely on local SQLite storage, **your data will be lost if you uninstall the app or lose your phone without backing it up.** Use the System tab in the app to periodically export your database to a `.json` file and save it to a secure local folder. 

## Legal & Medical Disclaimer
PLYOSTRIDE is an athletic tracking tool and biomechanical calculator, not a medical device. The "Rehab" and "Arch Guard" protocols are based on standard strength and conditioning literature. Consult a physician or physical therapist before beginning any high-impact plyometric or rehabilitation program.
