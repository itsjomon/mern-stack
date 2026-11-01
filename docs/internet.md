# Understanding the Internet

The **Internet** is a global network of interconnected networks. At its most fundamental level, a network starts whenever two or more devices connect to share data.

## What Is a Network?

- **Point-to-Point:** Two computers linked directly via an Ethernet cable or wireless signal.
- **LAN (Local Area Network):** Multiple local devices (laptops, phones, printers) connected within a home, office or building.
- **WAN (Wide Area Network):** A network connecting multiple LANs across large geographical distances, such as cities, countries or continents.
- **The Internet:** The ultimate global WAN, connecting millions of private and public networks globally through shared infrastructure.

## Physical Infrastructure

- **Modem:** Translates signals from external lines (fibre, coaxial, DSL) into digital binary data (`0`s and `1`s).
- **Router:** Directs traffic between local devices on your LAN and routes outbound traffic to the modem.
- **ISP (Internet Service Provider):** The telecommunications provider connecting your local setup to national and global network backbones.
- **IXPs & Global Backbone:** Physical exchange hubs and transoceanic subsea fibre-optic cables that carry high-speed data across regions and continents.

## Addressing and Identification

- **MAC Address:** A permanent, physical hardware identifier assigned to a network card, used for local device delivery within a LAN.
- **IP Address:** A logical, routable network address assigned to a machine:
  - **IPv4:** 32-bit format (e.g. `192.168.1.1`).
  - **IPv6:** 128-bit hexadecimal format (e.g. `2001:db8::1`).
- **DNS (Domain Name System):** The internet's directory service; converts human-readable domain names (like `github.com`) into computer-readable IP addresses.

## How Data Travels: Packets and Protocols

Data does not travel as single solid files. It uses **packet switching**:

1. **Chunking:** Data is broken into small, standardised chunks called **packets**.
2. **Addressing:** Each packet receives a header containing source IP, destination IP and sequence numbers.
3. **Routing:** Routers independently forward packets along the fastest available paths.
4. **Reassembly:** The receiving device reorders the packets and verifies their integrity.

### Key Protocols

| Protocol | Type | Purpose |
| --- | --- | --- |
| **TCP** | Reliable | Guarantees ordered, complete delivery with error checks (browsing, APIs, files). |
| **UDP** | Fast | Sends packets without delivery confirmation (live streaming, gaming, VoIP). |
| **IP** | Routing | Routes packets across network boundaries. |
| **HTTP/HTTPS** | Application | Rules for transferring web content; HTTPS encrypts communication with TLS/SSL. |

## Client-Server Model

- **Client:** The requester (browser, mobile app or CLI tool).
- **Server:** A remote machine listening for incoming requests, executing business logic, querying databases and returning responses.

## Request/Response Lifecycle (Navigating to a URL)

```text
Browser              DNS Server              Target Web Server
   |                     |                           |
   |--- Query Domain --->|                           |
   |<-- Return IP -------|                           |
   |                                                 |
   |--- TCP Handshake (SYN -> SYN-ACK -> ACK) ------>|
   |--- TLS Handshake (Secure Tunnel) -------------->|
   |--- Send HTTP GET Request ---------------------->|
   |<-- HTTP Response (Status 200 + HTML/Assets) ----|
   |                                                 |
[Render UI]
```

- **DNS Lookup:** Browser resolves the domain name into an IP address.
- **TCP & TLS Handshake:** Browser establishes a reliable, encrypted connection with the server.
- **HTTP Request:** Browser transmits a request (e.g. `GET /index.html`).
- **Server Processing:** Server processes logic, accesses databases if required and returns a response payload with a status code (`200 OK`).
- **Client Rendering:** Browser parses the HTML/CSS/JS files and renders the web page.
