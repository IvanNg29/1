/* quiz.js: mini-game trắc nghiệm Đồng Tháp.
   THÊM CÂU HỎI: thêm một dòng vào NGAN_HANG theo mẫu:
   ["Câu hỏi?", ["ĐÁP ÁN ĐÚNG", "sai 1", "sai 2", "sai 3"], "Giải thích ngắn"],
   Lưu ý: đáp án ĐÚNG luôn đặt ở vị trí đầu tiên; chương trình tự xáo trộn khi hiển thị. */
const NGAN_HANG = [
  ["Đồng Tháp được mệnh danh là vùng đất của loài hoa nào?", ["Sen hồng", "Hoa mai vàng", "Hoa đào", "Hoa phượng"], "Đồng Tháp là “Đất Sen Hồng”; hoa sen hồng Tháp Mười là biểu tượng của quê hương."],
  ["Đồng Tháp có đường biên giới chung với quốc gia nào?", ["Campuchia", "Lào", "Thái Lan", "Myanmar"], "Đồng Tháp giáp Campuchia ở phía bắc, có các cửa khẩu như Dinh Bà."],
  ["Dòng sông nào bồi đắp phù sa cho Đồng Tháp?", ["Sông Mê Kông", "Sông Hồng", "Sông Đà", "Sông Thu Bồn"], "Sông Mê Kông (qua sông Tiền, sông Hậu) tạo nên đất đai phù sa và mùa nước nổi."],
  ["Mùa “nước nổi” ở Đồng Tháp là mùa gì?", ["Mùa nước lũ từ sông Mê Kông tràn về", "Mùa bão ven biển", "Mùa nước biển dâng mặn", "Mùa mưa đá"], "Nước nổi mang theo phù sa, tôm cá và nhiều đặc sản như cá linh, bông điên điển."],
  ["Tỉnh Đồng Tháp hình thành năm 1976 từ sự hợp nhất của hai tỉnh nào?", ["Kiến Phong và Sa Đéc", "Long An và Tiền Giang", "An Giang và Cần Thơ", "Vĩnh Long và Trà Vinh"], "Năm 1976, Kiến Phong và Sa Đéc hợp nhất thành tỉnh Đồng Tháp."],
  ["Làng hoa Sa Đéc nhộn nhịp và rực rỡ nhất vào dịp nào?", ["Trước và trong Tết Nguyên đán", "Mùa gặt lúa", "Rằm tháng Tám", "Ngày Quốc khánh 2/9"], "Cuối năm, rất nhiều chậu hoa kiểng được chuẩn bị cho thị trường Tết."],
  ["Loài chim quý nào là biểu tượng của Vườn quốc gia Tràm Chim?", ["Sếu đầu đỏ", "Chim yến", "Đại bàng", "Chim công"], "Sếu đầu đỏ là loài chim quý hiếm, Tràm Chim là một trong những nơi chúng sinh sống ở Việt Nam."],
  ["Vườn quốc gia Tràm Chim chủ yếu bảo tồn hệ sinh thái nào?", ["Đất ngập nước", "Rừng ngập mặn ven biển", "Rừng thông cao nguyên", "San hô biển"], "Tràm Chim là vùng đất ngập nước tiêu biểu của Đồng Tháp Mười."],
  ["Nhà cổ Huỳnh Thủy Lê ở Sa Đéc gắn với tiểu thuyết nổi tiếng nào?", ["Người tình", "Truyện Kiều", "Số đỏ", "Dế Mèn phiêu lưu ký"], "Ngôi nhà gắn với nguyên mẫu trong tiểu thuyết “Người tình” của nhà văn Marguerite Duras."],
  ["Cụ Phó bảng Nguyễn Sinh Sắc, được tưởng niệm tại Cao Lãnh, là thân sinh của ai?", ["Chủ tịch Hồ Chí Minh", "Nguyễn Trãi", "Phan Bội Châu", "Nguyễn Du"], "Cụ là thân sinh của Chủ tịch Hồ Chí Minh, những năm cuối đời sống và mất tại Cao Lãnh."],
  ["Khu di tích Xẻo Quýt từng là căn cứ của cơ quan nào trong kháng chiến chống Pháp?", ["Xứ ủy Nam Bộ", "Bộ Tổng tham mưu", "Quốc hội", "Ngân hàng Quốc gia"], "Giữa rừng tràm Đồng Tháp Mười, Xứ ủy Nam Bộ đặt căn cứ tại Xẻo Quýt."],
  ["Du khách đến Gáo Giồng thường trải nghiệm hoạt động đặc trưng nào?", ["Chèo xuồng len lỏi trong rừng tràm", "Trượt tuyết", "Leo núi đá", "Lặn biển ngắm san hô"], "Gáo Giồng có rừng tràm, đồng cỏ ngập nước và nhiều loài chim; xuồng là phương tiện tham quan quen thuộc."],
  ["Đờn ca tài tử Nam Bộ được UNESCO ghi danh là di sản văn hóa phi vật thể của nhân loại vào năm nào?", ["2013", "1993", "2003", "2023"], "Năm 2013, UNESCO ghi danh Đờn ca tài tử Nam Bộ."],
  ["Chiếu Định Yên nổi tiếng được dệt từ nguyên liệu nào?", ["Cây lác (cói)", "Tre", "Lá dừa", "Sợi bông"], "Chiếu Định Yên dệt từ cây lác, mát, bền và có hoa văn đẹp."],
  ["Làng nghề dệt chiếu Định Yên thuộc vùng nào của Đồng Tháp?", ["Lấp Vò", "Tân Hồng", "Tam Nông", "Thanh Bình"], "Làng chiếu Định Yên nằm ở Lấp Vò, là làng nghề lâu đời của miền Tây."],
  ["Phương tiện đi lại quen thuộc của vùng sông nước, kênh rạch Đồng Tháp là gì?", ["Xuồng ba lá", "Xe lam", "Xe bò kéo", "Tàu hỏa"], "Xuồng ba lá nhỏ gọn, dễ len lỏi qua kênh rạch và rừng tràm."],
  ["Món hủ tiếu nổi tiếng nhất của Đồng Tháp mang tên địa phương nào?", ["Sa Đéc", "Cao Lãnh", "Hồng Ngự", "Tháp Mười"], "Hủ tiếu Sa Đéc nổi tiếng với sợi mềm dai và nước dùng ngọt thanh."],
  ["Lẩu đặc trưng của mùa nước nổi được nấu từ cá linh và loài hoa nào?", ["Bông điên điển", "Hoa hồng", "Hoa cúc", "Hoa lan"], "Cá linh nấu với bông điên điển vàng và rau đồng là món quen thuộc mỗi mùa nước nổi."],
  ["Món chuột đồng quay lu nổi tiếng ở địa phương nào của Đồng Tháp?", ["Cao Lãnh", "Sa Đéc", "Lai Vung", "Lấp Vò"], "Chuột đồng ướp gia vị rồi quay trong lu đất nung là đặc sản của Cao Lãnh."],
  ["Lai Vung nổi tiếng với loại trái cây đặc sản nào?", ["Quýt hồng", "Sầu riêng", "Vải thiều", "Nhãn lồng"], "Quýt hồng Lai Vung ngọt thơm, được ưa chuộng dịp Tết, cùng với nem Lai Vung."]
];

const SO_CAU = 10; // số câu mỗi lượt
// [điểm tối thiểu, danh hiệu, lời nhắn]. Từ 8 điểm trở lên sẽ có pháo giấy
const DANH_HIEU = [
  [9, "Thổ địa Đất Sen Hồng", "Bạn thuộc Đồng Tháp như lòng bàn tay."],
  [7, "Hướng dẫn viên tài ba", "Đọc thêm chút nữa là thành chuyên gia."],
  [5, "Du khách chăm chỉ", "Nền tảng tốt, hãy khám phá thêm các trang nhé."],
  [3, "Du khách tập sự", "Đồng Tháp còn nhiều điều thú vị đang chờ bạn."],
  [0, "Lữ khách mới đến", "Đọc các trang văn hóa, du lịch, ẩm thực rồi chơi lại!"]
];
const khung = document.getElementById("quiz");
let bo = [], i = 0, diem = 0;
const xaoTron = (a) => { a = [...a]; for (let k = a.length - 1; k > 0; k--) { const j = Math.random() * (k + 1) | 0; [a[k], a[j]] = [a[j], a[k]]; } return a; };

// Chuyển màn: thẻ trượt đi rồi thẻ mới trượt vào
function doi(fn) {
  khung.classList.add("ra");
  setTimeout(() => { khung.classList.remove("ra", "vao"); fn(); void khung.offsetWidth; khung.classList.add("vao"); }, 300);
}
function manHinhDau() {
  khung.innerHTML = `<div class="ct"><h2>Bạn hiểu Đồng Tháp đến đâu?</h2><p>${SO_CAU} câu ngẫu nhiên từ ngân hàng ${NGAN_HANG.length} câu về địa lý, lịch sử, du lịch, ẩm thực và văn hóa.</p><button class="nut" id="bd">Bắt đầu</button></div>`;
  document.getElementById("bd").onclick = () => doi(batDau);
}
function batDau() {
  bo = xaoTron(NGAN_HANG).slice(0, SO_CAU).map(([q, o, g]) => ({ q, g, o: xaoTron(o.map((t, k) => ({ t, dung: k === 0 }))) }));
  i = 0; diem = 0; hienCau();
}
function hienCau() {
  const c = bo[i];
  khung.innerHTML = `<div class="tt"><b>Câu ${i + 1}/${SO_CAU}</b><span>Điểm ${diem}</span></div><div class="bar"><i style="width:${i / SO_CAU * 100}%"></i></div><h2>${c.q}</h2>` +
    c.o.map((x, k) => `<button class="opt" data-k="${k}"><b>${"ABCD"[k]}</b><span>${x.t}</span></button>`).join("") + `<div id="fb" aria-live="polite"></div>`;
  requestAnimationFrame(() => requestAnimationFrame(() => (khung.querySelector(".bar i").style.width = (i + 1) / SO_CAU * 100 + "%")));
  khung.querySelectorAll(".opt").forEach((b) => (b.onclick = () => chon(+b.dataset.k)));
}
function chon(k) {
  const c = bo[i], n = khung.querySelectorAll(".opt"), dung = c.o[k].dung;
  n.forEach((b, j) => { b.disabled = true; if (c.o[j].dung) b.classList.add("dung"); });
  if (dung) diem++; else n[k].classList.add("sai"); // sai: rung nhẹ
  document.getElementById("fb").innerHTML = `<div class="fb"><b>${dung ? "Chính xác." : "Chưa đúng."}</b> ${c.g}</div><button class="nut" id="tiep">${i + 1 < SO_CAU ? "Câu tiếp theo" : "Xem kết quả"}</button>`;
  document.getElementById("tiep").onclick = () => doi(() => (++i < SO_CAU ? hienCau() : ketQua()));
}
function ketQua() {
  const [, ten, loi] = DANH_HIEU.find(([m]) => diem >= m);
  khung.innerHTML = `<div class="ct"><p>Điểm của bạn</p><div class="diem-so">${diem}/${SO_CAU}</div><h2>${ten}</h2><p>${loi}</p><button class="nut" id="lai">Chơi lại với bộ câu hỏi mới</button></div>`;
  document.getElementById("lai").onclick = () => doi(batDau);
  if (diem >= 8) phao();
}
// Pháo giấy bằng canvas, không cần thư viện
function phao() {
  const c = document.createElement("canvas"), x = c.getContext("2d"), W = (c.width = innerWidth), H = (c.height = innerHeight);
  c.className = "pao"; document.body.append(c);
  const m = ["#D98A9C", "#C89D54", "#2D4F3E", "#8FB39F"];
  const p = Array.from({ length: 150 }, () => ({ x: W / 2, y: H * .6, vx: (Math.random() - .5) * 18, vy: -Math.random() * 16 - 4, s: 6 + Math.random() * 6, r: Math.random() * 6, c: m[Math.random() * 4 | 0] }));
  let f = 0;
  (function v() {
    x.clearRect(0, 0, W, H);
    p.forEach((q) => { q.vy += .35; q.x += q.vx; q.y += q.vy; q.r += .2; x.save(); x.translate(q.x, q.y); x.rotate(q.r); x.fillStyle = q.c; x.fillRect(-q.s / 2, -q.s / 4, q.s, q.s / 2); x.restore(); });
    ++f < 200 ? requestAnimationFrame(v) : c.remove();
  })();
}
manHinhDau();
