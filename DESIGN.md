# Application Design notes

## Application Flow
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
1. Application Form
1. Form function to retrieve & display Client IP
### Serverless Functions
1. Get NSG IP, NSG Rule Status, Refresh TimeStamp
1. Update NSG with Client IP

