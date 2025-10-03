# Fehlerbehebung / Troubleshooting

## QR-Code Scan Fehler: "Failed to download remote update"

Dieser Fehler tritt auf, wenn die Expo Go App keine Verbindung zum Entwicklungsserver herstellen kann.

### Lösungen (in Reihenfolge ausprobieren):

#### 1. Tunnel-Modus verwenden (Empfohlen)
```bash
npm run dev:tunnel
```
Der Tunnel-Modus funktioniert in den meisten Netzwerk-Umgebungen zuverlässig.

#### 2. LAN-Modus verwenden
```bash
npm run dev:lan
```
Stelle sicher, dass:
- Telefon und Computer im gleichen WLAN-Netzwerk sind
- Kein VPN aktiv ist
- Die Firewall den Metro Bundler (Port 8081) nicht blockiert

#### 3. Localhost-Modus mit USB (Android)
```bash
npm run dev:localhost
```
Verwende USB-Debugging und scanne den QR-Code.

#### 4. SDK-Version prüfen
Stelle sicher, dass die Expo Go App-Version mit der SDK-Version deines Projekts übereinstimmt:
- Projekt SDK: **54**
- Expo Go App sollte ebenfalls SDK 54 unterstützen

Falls nicht, installiere eine passende Version von Expo Go oder aktualisiere dein Projekt.

#### 5. Firewall-Einstellungen (Windows)
Falls du Windows verwendest, füge eine Firewall-Regel für den Metro Bundler hinzu:

**PowerShell (als Administrator):**
```powershell
New-NetFirewallRule -DisplayName "Expo Metro" -Direction Inbound -Protocol TCP -LocalPort 8081 -Action Allow
```

#### 6. Cache leeren und neu installieren
```bash
rm -rf node_modules
npm install
npm run dev:tunnel
```

### Weitere Tipps:

**Netzwerk-Probleme diagnostizieren:**
- Überprüfe, ob beide Geräte im gleichen Netzwerk sind
- Teste mit `npm run dev:tunnel` als erstes
- Deaktiviere VPN-Verbindungen
- Prüfe Firewall-Einstellungen

**Bei Android-Geräten:**
- Aktiviere USB-Debugging
- Verwende `npm run dev:localhost` mit USB-Verbindung
- Erlaube der Expo Go App alle benötigten Berechtigungen

**Bei iOS-Geräten:**
- Stelle sicher, dass das Gerät dem Computer vertraut
- Verwende `npm run dev:tunnel` für die zuverlässigste Verbindung

---

## Kamera-Berechtigungen

Falls Kamera-Funktionen nicht funktionieren:

1. Öffne die Einstellungen deines Geräts
2. Navigiere zu Apps > Expo Go
3. Erlaube den Kamera-Zugriff
4. Starte die App neu

---

## Entwicklungsserver-Befehle

- `npm run dev` - Standard-Entwicklungsmodus
- `npm run dev:tunnel` - Tunnel-Modus (funktioniert überall)
- `npm run dev:lan` - LAN-Modus (gleiches Netzwerk erforderlich)
- `npm run dev:localhost` - Localhost mit USB-Debugging

---

## Weitere Probleme?

Falls diese Lösungen nicht helfen:

1. Überprüfe die Expo-Dokumentation: https://docs.expo.dev/
2. Suche in den Expo-Foren: https://forums.expo.dev/
3. Prüfe GitHub-Issues: https://github.com/expo/expo/issues
