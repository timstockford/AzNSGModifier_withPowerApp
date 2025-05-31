# Application Design notes

## Application Flow
Ref: https://mermaid.js.org/syntax/flowchart.html
```mermaid
flowchart TD
    A[Load Form] --> B[Get Client IP]
    B --> C[Get NSG IP, NSG Rule Status, Refresh TimeStamp]
    C --> D[User Click Button]
    D --> E[Update NSG with Client IP]
    E --> F[Get NSG IP, NSG Rule Status, Refresh TimeStamp]
    F --> G[End]
```
## Application Components
### Power Forms
1. Application Form with function to retrieve & display Client IP - Based on https://github.com/yashag2255/WhiteList-IP-Address-in-Canvas-Apps/
### Serverless Functions
1. Get NSG IP, NSG Rule Status, Refresh TimeStamp
1. Update NSG with Client IP

