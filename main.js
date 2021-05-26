const SoTienVay = document.querySelector('.input-SoTienVay')
const ThoiGianVay = document.querySelector('.input-TimeVay')
const LaiSuat = document.querySelector('.input-LaiSuat')
const btn = document.querySelector('.container-item-btn')
const container = document.querySelectorAll('.container')



btn.addEventListener('click', ()=> {

    let thoiGianVay = ThoiGianVay.value
    let laiSuat = (LaiSuat.value / 100) / ThoiGianVay.value
    let goc = SoTienVay.value
    let gocConLai = goc
   
    for(let i = 1; i <= thoiGianVay; i++) {
        let gocHangThang = goc / thoiGianVay
        let laiPhaiTra = gocConLai * laiSuat
        let tienPhaiTraHangThang = laiPhaiTra + gocHangThang
        gocConLai = gocConLai - gocHangThang

        console.log(
            
        `
         Kỉ nợ : ${i}
         Tiền gốc: ${gocConLai}
         Gốc: ${gocHangThang} 
         Lai: ${laiPhaiTra} 
         Gốc + Lãi: ${tienPhaiTraHangThang}`
        )

    }
 

})

