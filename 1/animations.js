/* animations.js: navbar, footer, hiệu ứng cuộn, chuyển trang, lọc, modal. Dùng chung mọi trang. */
document.documentElement.classList.add("js");
const $$ = (s) => [...document.querySelectorAll(s)];

/* 1. Navbar + Footer: sửa menu tại mảng TRANG */
const TRANG = [["index.html","Trang chủ"],["van-hoa.html","Lịch sử & Văn hóa"],["du-lich.html","Du lịch"],["am-thuc.html","Ẩm thực"],["quiz.html","Trắc nghiệm"]];
const hienTai = location.pathname.split("/").pop() || "index.html";
const lk = TRANG.map(([u,t]) => `<li><a href="${u}"${u===hienTai?' class="on" aria-current="page"':""}>${t}</a></li>`).join("");
document.getElementById("site-header").outerHTML = `<header class="nav"><div class="w"><a class="logo" href="index.html">Đồng Tháp</a><button class="burger" aria-label="Mở menu" aria-expanded="false">☰</button><ul class="menu">${lk}</ul></div></header>`;
document.getElementById("site-footer").outerHTML = `<footer class="foot"><div class="w"><a class="logo" href="index.html">Thuần khiết như hồn sen</a><nav>${TRANG.map(([u,t])=>`<a href="${u}">${t}</a>`).join("")}</nav><p>© 2026. Nội dung giới thiệu mang tính tham khảo.</p></div></footer>`;
const nav = document.querySelector(".nav"), ds = document.querySelector(".menu"), nut = document.querySelector(".burger");
nut.onclick = () => nut.setAttribute("aria-expanded", ds.classList.toggle("open"));

/* 2. Cuộn: kính mờ sau 50px, ẩn khi cuộn xuống nhanh, hiện khi cuộn lên, parallax, tiến độ timeline */
let yC = 0;
function khiCuon() {
  const y = scrollY, d = y - yC;
  nav.classList.toggle("cuon", y > 50);
  if (d > 12 && y > 200 && !ds.classList.contains("open")) nav.classList.add("an"); else if (d < -2) nav.classList.remove("an");
  yC = y;
  $$("[data-px]").forEach((e) => (e.style.translate = `0 ${y * e.dataset.px}px`)); // tốc độ parallax: sửa data-px
  const tl = document.querySelector(".tl");
  if (tl) { const r = tl.getBoundingClientRect(); tl.style.setProperty("--p", Math.max(0, Math.min(1, (innerHeight * .6 - r.top) / r.height))); }
}
addEventListener("scroll", () => requestAnimationFrame(khiCuon), { passive: true });
khiCuon();

/* 3. Trồi lên khi cuộn tới (so le 0,12s mỗi phần tử anh em) */
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("hien"); io.unobserve(e.target); } }), { threshold: .15 });
$$(".r").forEach((el) => {
  el.style.setProperty("--d", Math.min([...el.parentElement.children].filter((c) => c.classList.contains("r")).indexOf(el), 4) * .12 + "s");
  io.observe(el);
});

/* 4. Dải chữ chạy vô tận (nhân đôi nội dung để chạy liền mạch) */
$$(".chay div").forEach((d) => (d.innerHTML += d.innerHTML));

/* 5. Nút nam châm */
$$(".nut").forEach((b) => {
  b.addEventListener("mousemove", (e) => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`; });
  b.addEventListener("mouseleave", () => (b.style.transform = ""));
});

/* 6. Chuyển trang: mờ dần rồi mới đi */
addEventListener("pageshow", () => document.body.classList.remove("roi"));
document.addEventListener("click", (e) => {
  const a = e.target.closest("a[href$='.html']");
  if (!a || e.metaKey || e.ctrlKey || a.target) return;
  e.preventDefault(); document.body.classList.add("roi"); setTimeout(() => (location.href = a.href), 350);
});

/* 7. Bộ lọc điểm đến: nút có data-loc, thẻ có data-cat (nhiều danh mục cách nhau bằng dấu cách) */
function loc(v) {
  let n = 0;
  $$("[data-loc]").forEach((b) => b.classList.toggle("on", b.dataset.loc === v));
  $$(".diem").forEach((d) => {
    const ok = v === "tat-ca" || d.dataset.cat.split(" ").includes(v);
    const dangAn = d.hidden; d.hidden = !ok;
    if (ok) { d.classList.toggle("dao", n++ % 2 === 1); if (dangAn) { d.classList.add("lai"); setTimeout(() => d.classList.remove("lai"), 800); } }
  });
}
$$("[data-loc]").forEach((b) => (b.onclick = () => loc(b.dataset.loc)));
if (document.querySelector(".diem")) loc("tat-ca");

/* 8. Modal món ăn: dữ liệu nằm trong data-ten / data-goc / data-vi của nút .mon */
if (document.querySelector(".mon")) {
  const md = document.createElement("dialog"); md.className = "md";
  md.innerHTML = '<button class="x" aria-label="Đóng">×</button><h2></h2><p class="g"></p><p class="v"></p>';
  document.body.append(md);
  $$(".mon").forEach((m) => (m.onclick = () => {
    md.querySelector("h2").textContent = m.dataset.ten;
    md.querySelector(".g").innerHTML = "<b>Nguồn gốc.</b> " + m.dataset.goc;
    md.querySelector(".v").innerHTML = "<b>Hương vị.</b> " + m.dataset.vi;
    md.showModal();
  }));
  md.onclick = (e) => { if (e.target === md || e.target.className === "x") md.close(); };
}
