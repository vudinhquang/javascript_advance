#### <div align="center">Micro Tasks Queue và Tasks Queue (Macro Tasks)</div>

- Trong Javascript Runtime có các thành phần giúp Javascript có thể xử lý những tác vụ bất đồng bộ và kiểm soát luồng thực thi
  - **Call Stack**
  - **Web APIs**
  - **Callback Queues**
  - **Execution Context**
  - **Even Loops**

- Thực tế **Callback Queues** hỗ trợ nhiều hơn chúng ta nghĩ. Nó bao gồm hai loại hàng đợi (Queues) với **thứ tự ưu tiên** khác nhau
  - Tasks Queue - **Macro Tasks Queue**
  - **Micro Tasks Queue**

- Điểm giống nhau của hai loại hàng đợi này là các tác vụ thực thi cần phải **xếp hàng chờ khi Call Stack đang xử lý**. Một khi **Call Stack rỗng** thì các tác vụ mới được phép di chuyển lần lượt để thực thi sau mỗi **event loop**.

- Điểm khác biệt ở đây là xét về **thứ tự ưu tiên**. Micro Tasks sẽ có độ ưu tiên thực thi cao hơn Macro Tasks.
---
- Các dạng **Macro Tasks** thường gặp: Hàm Callback từ sự kiện người dùng (**Click**, **Scroll**, ...). Hàm truyền vào **setTimeout()**, **setInterval()**
- Các dạng **Micro Tasks**: Dùng với **Promise**. Hàm truyền vào **queueMicrotask()**