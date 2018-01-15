
function shuffle(array) {
    var currentIndex = this.length;
    var temporaryValue;
    var randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}


questions=shuffle(questions);
var questions = [{
  question: "Châu lục nào có diện tích lớn nhất?",
  traloi:[ "Châu Á","Châu Mỹ","Châu Phi","Châu Âu"],
  vitri:0
}, {
    cauhoi: "Một tờ báo giảm giá 20%. Hỏi nó phải tăng bao nhiêu % để lại có giá như cũ",
    traloi:['15%','20%','25%','30%'],
    vitri:2
}, {
    question:"Số tiếp theo của dãy số 13 - 8 - 14 - 9 - 15 là?",
    traloi:[ "13","11","10","7"],
    vitri:2
}, {
    question:"Số tiếp theo của dãy số 5 - 11 - 18 - 26 - 35?",
    traloi:["45","55","65","60"],
    vitri:0

}, {
      question:"Số tiếp theo của dãy số 1, 1, 2, 3, 5?",
    traloi:["6","7","8","9"],
    vitri:2
}, {
    question: "Số tiếp theo của dãy số: 19, 28, 37, 46, là?",
    traloi:["49","55", "58","65"],
    vitri:1
}, {
    question:"Giải thường Oscar ra đời năm nào ?",
    traloi:["1929","1931","1933","1935"],
    vitri:0

}, {
     question:"hệ số thập phân là phát minh của đất nước nào ?",
    traloi:["Ấn Độ","Nga","Mỹ","Nhật Bản"],
    vitri:0
}, {
    question:"Nước ta chính thức lấy tên Cộng hòa xã hội chủ nghĩa Việt Nam từ năm nào ?",
    traloi:["1930","1946","1975","1976"],
    vitri:3

}, {
    question:"Ngày đầu tiên Apple ra mắt điện thoại iPhone thế hệ đầu tiên là khi nào?",
    traloi:["9/1/2007","30/8/2007","25/12/2006","1/9/2007"],
    vitri:0

}, {
    question: "Chiếc iPhone đầu tiên được bán ra ngày nào?",
    traloi:["9/1/2007","29/6/2007","19/9/2007","19/8/2007"],
    vitri:1
}, {
    question: "Dung lượng thấp nhất của iPhone là bao nhiêu?",
    traloi:["4 GB","8 GB","16 GB","2 GB"],
    vitri:0
}, {
    question: "iOS là tên gọi chính thức cho hệ điều hành trên iPhone từ thế hệ nào?",
    traloi:["4","3","5","6"],
    vitri:0
}, {
    question:  "Mark Zuckerberg sinh ra vào năm nào?",
    traloi:["1983","1984","1986","1980"],
    vitri:1
}, {
    question: "Ai đang là CEO hiện tại của trang mạng xã hội Twitter?",
    traloi:["Tim Cook", "Evan Spiegel","Kevin Systrom","Jack Dorsey"],
    vitri:3
}, {
    question: "Ai đang là CEO hiện tại của instagram?",
    traloi:["Tim Cook","Evan Spiegel", "Kevin Systrom","Jack Dorsey"],
    vitri:2

}, {
    question:"Sergey Brin sinh năm ?",
    traloi:["1975","1974","1973","1972"],
    vitri:2
}, {
    question:"Larry Page sinh năm ?",
    traloi:["1971","1972","1973","1974"],
    vitri:2
}, {
    question:"Thefacebook.com được đổi thành Facebook.com sau:",
    traloi:["4 tháng","1 năm","3 tháng","1 tháng"],
    vitri:1
}, {
    question: "Google là từ viết sai chính tả của",
    traloi:["Googol","Googool","Googel", "Googelo"],
    vitri:0
}, {
    question: "Lá cờ đỏ sao vàng lần đầu tiên xuất hiện trong thời gian nào ?",
    traloi:["Khởi nghĩa Hương Khê","Khởi nghĩa Nam Kỳ","Binh biến Đô Lương","Khởi nghĩa Bắc Sơn"],
    vitri:1
}, {
    question:  "Đền Hùng bao gồm bao nhiêu đền chính?",
    traloi:["2","3","5","7"],
    vitri:1
}, {
    question: "Vị trạng nguyên nhỏ tuổi nhất trong lịch sử thi cử Việt Nam ?",
    traloi:["Lê Văn Thịnh","Nguyễn Hiền","Vũ Tuấn Chiêu", "Nguyễn Kì"],
    vitri:1
}, {
    question: "Mù Cang Chải thuộc tỉnh nào ?",
    traloi:["Yên Bái","Lào Cai","Lai Châu","Sơn La"],
    vitri:0

}, {
    question:"Đỉnh núi cao nhất Việt Nam_Phan-xi-păng thuộc tỉnh nào ?",
    traloi:[ "Lào Cai","Yên Bái","Lạng Sơn", "Cao Bằng"],
    vitri:0
}, {
    question:"Quốc Tử Giám được xây dựng vào năm nào ?",
    traloi:["1070","1074","1077", "1076"],
    vitri:3
}, {
    question: "Cuộc khởi nghĩa Lam Sơn do ai lãnh đạo ?",
    traloi:["Lê Lai","Cao Bá Quát","Đinh Bộ Lĩnh","Lê Lợi"],
    vitri:3
}, {
    question: "Grammy là giải thưởng về lĩnh vực gì ?",
    traloi:["Văn học","Toán học","Vật lý","Âm nhạc"],
    vitri:3
}, {
    question: "Oscar là giải thưởng của lĩnh vực gì ?",
    traloi:["Điện ảnh","Thể thao","Toán học","Vật lý"],
    vitri:0
}, {
      question:"Đội bóng nào vô địch Euro 2004 ?",
    traloi:["Bồ Đáo Nha","Tây Ban Nha","Hy Lạp","Đáp án khác"],
    vitri:2
}, {

    question:"Ban nhạc ABBA của Thụy Điển gồm bao nhiêu thành viên ?",
    traloi:["3", "4","5", "6"],
    vitri:1
}, {

    question: "Loài ong mật có bao nhiêu mắt ?",
    traloi:["2", "4","5", "6"],
    vitri:2
}, {
    question:  "Quốc hiệu đầu tiên của nước ta là gì ?",
    traloi:["Văn Lang","Đại Việt","Đại Nam", "Đáp án khác"],
    vitri:0
}, {

    question: "Đại vương ếch trong tác phẩm Dế mèn phưu lưu ký có tên là gì ?",
    traloi:["Ếch ương","Ếch cốm","Ếch đồng","Ếch rừng"],
    vitri:1
}, {
    question:"Vũ điệu truyền thống của đảo Hawaii là ?",
    traloi:["Điệu nhảy Hula","Điệu nhảy cha cha cha","Vũ điệu SamBa","Vũ điệu Tango"],
    vitri:0
}, {
    question:"Vịnh nào của Việt Nam được coi là 1 trong 3 vịnh đẹp nhất thế giới",
    traloi:["Vịnh Hạ Long","Vịnh Lăng Cô","Vịnh Xuân Đài","Vịnh Cam Ranh"],
    vitri:3

}, {
    question: "Loài chim nào có khả năng bay lùi lại phía sau ?",
    traloi:["Chim ruồi","Chim gõ kiến","Chim cu","Chim rái cá"],
    vitri:0
}, {
    question:"Việt Nam có bao nhiêu di sản văn hóa thế giới ?",
    traloi:["6 di sản","7 di sản","8 di sản","9 di sản"],
    vitri:1
}, {
    question: "Ngọn núi nào được coi là cổng của thiên đường ?",
    traloi:["Olympus","Phú Sỹ","Himalaya","Đáp án khác"],
    vitri:0
}, {
    question:  "Nơi sinh của Beethoven ?",
    traloi:[ "Đức","Pháp", "Bỉ","Italya"],
    vitri:0
}, {
    question: "Tỉnh nào có đường biên giới dài nhất nước ta ", 
    traloi:["Sơn La","Cà Mau","Quảng Ninh","Lai Châu"],
    vitri:3
}, {
    question: "Đại dương nào nhỏ nhất thế giới ?", 
    traloi:["Thái Bình Dương","Đại Tây Dương", "Ấn Độ Dương","Bắc Băng Dương"],
    vitri:3
}, {
    question:  "Vị vua nào có thời gian trị vì ngắn nhất nước ta ?",
    traloi:["Dục Đức","Lê Lợi","Lý Công Uẩn","Bảo Đại"],
    vitri:0
}, {
    question:  "Nước thứ 3 trên thế giới đã đưa người nước đó vào không gian đó là đất nước ?",
    traloi:["Trung Quốc","Mỹ","Nga","Việt Nam"],
    vitri:0
}, {
    question:"Tuyến đường sắt ở đâu cao nhất thế giới ?",  
    traloi:["Nga","Tây Ban Nha","Trung Quốc","Nhật Bản"],
    vitri:2
}, {
    question: "Tai của Châu Chấu nằm ở đâu ?",
    traloi:["Cạnh mắt", "Khớp gối chân trước","Cạnh mũi", "Không có tai"],
    vitri:1
}, {
    question:  "Hành tinh có từ trường lớn nhất trong Thái Dương Hệ ?",
    traloi:["Kim Tinh","Trái Đất","Thổ Tinh","Mộc Tinh"],
    vitri:1
}, {
    question: "Đường mòn Hồ Chí Minh là tuyến đường có số hiệu bao nhiêu ?",
    traloi:["159","359","559","759"],
    vitri:3
}, {
    question: "Ánh sáng từ mặt trời tới trái đất mất bao nhiêu phút ?",
    traloi:["7 phút","8 phút","9 phút","10 phút"],
    vitri:1
}, {
    question: "Chuồn chuồn có bao nhiêu răng ?",
    traloi:["14 răng","16 răng","18 răng","20 răng"],
    vitri:1
}, {
    question: "Người Ai Cập cổ xưa gọi Paraon có nghĩa là gì ?",
    traloi:["Ngôi nhà lớn","Mặt trời","Biển cả","Núi rừng"],
    vitri:0
}, {
    question: "Tại sao sao trổi có đuôi ?",
    traloi:["Do cấu tạo của sao Chổi có đuôi","Do con người tưởng tượng ra","Do áp suất của gió mặt trời","Đáp án khác"],
    vitri:2
}, {
    question:"Tỉnh nào sau đây không có một ngọn núi nào ?", 
    traloi:[ "Thái Bình","Nam Định","Quảng Ninh", "Quảng Nam"],
    vitri:0
}, {
    question:"Phần mềm Vietkey do ai viết ra ?",
    traloi:["Đặng Minh Tuấn","Vũ Hoài Thanh","Nguyễn Đức Quảng","Đáp án khác"],
    vitri:0
}, {
    question:"EU có bao nhiêu nước ?",
    traloi:["24 nước","25 nước","26 nước","27 nước"],
    vitri:3
}, {
    question: "Đáo lớn nhất thế giới là ?",
    traloi:["Madagasca","Green Land", "New guinea","Calimantan"],
    vitri:1
}, {
    question:"The Rock(diễn viên cực kỳ nổi tiếng) từng xuất thân là ?",
    traloi:["Cầu thủ","Bồi bàn","Võ sĩ đô vật","Đáp án khác"],
    vitri:2
}, {
    question:"Hành tinh nào là hành tinh được Galile phát hiện năm 1600 ?",
    traloi:["Sao Kim", "Sao Thổ","Sao Hỏa","Sao Mộc"],
    vitri:1
}, {
    question:"Thể thơ Haiku là thể thơ của nước nào ?",
    traloi:["Trung Quốc","Hàn Quốc","Nhật Bản","Ấn Độ"],
    vitri:2
}, {
    question: "Tử Cấm Thành được xây dựng năm nào ?",
    traloi:["1406","1408","1410","1412"],
    vitri:0
}, {
    question:  "Điệu nhày tango xuất xứ từ nước nào ?",
    traloi:["Mexico","Argentina","Brazil","Chile"],
    vitri:1
}, {
    question:  "Trường đại học đầu tiên của Châu Âu nằm ở đâu ?",
    traloi:["Berlin","Athenes","Rome","Pari"],
    vitri:1
}, {
    question: "Một năm có thể có nhiều nhất là bao nhiêu ngày chủ nhật ?",
    traloi:["51","52","53","54"],
    vitri:2
}, {
    question: "Nước nào là quê hương của ông già tuyết ?",
    traloi:["Đan Mạch","Na Uy","Thụy Điển","Phần Lan"],
    vitri:3
}, {
    question:  "Thành phố nào được Shakerpeares chọn làm bối cảnh diễn cho câu truyện Romeo và Juliet",
    traloi:["Verona", "Parma","Turin","Milan"],
    vitri:0
}, {
    question:"Hồ nào trước kia có tên Thủy Quân ?",
    traloi:["Hồ Ba Bể","Hồ Tây","Hồ Hoàn Kiếm","Đáp án khác"],
    vitri:2
}, {
    question:"Tiếng Việt có bao nhiêu chữ cái ?",
    traloi:["27","28", "29","30"],
    vitri:2
}, {
    question:"Trụ sở của Liên Hợp Quốc đặt ở đâu ?",
    traloi:["Geneve","New york","La Haye","Wasington"],
    vitri:1
}, {
    question: "Người Nga có phong tục tặng quà gì cho quý khách của mình ?",
    traloi:["Đồ trang sức","Sách","Hoa","Bánh mỳ và muối"],
    vitri:3
}, {
    question: "Phố hàng vải hiện nay đang kinh doanh mặt hàng gì chủ yếu ?",
    traloi:["Tre (trúc)","Chiếu","Vải","Giày dép"],
    vitri:0
}, {
    question: "Hành tinh nào trong hệ mặt trời có cấu tạo giống trái đất nhất ?",
    traloi:["Sao Hỏa","Sao Kim", "Sao Mộc","Sao Thổ"],
    vitri:0
}, {
    question:"Nước nào có diện tích lớn thứ 2 thế giới ",
    traloi:["Mỹ","Trung Quốc","Nga","Canada"],
    vitri:3
}, {
    question:"Ai là tác giả cuốn Đại Việt sử ký toàn thư",
    traloi:["Phan Huy Chú","Lê Văn Hưu","Ngô Sỹ Liên","Đáp án khác"],
    vitri:2
}, {
    question:"Ai là tác giả của quấn Đại Việt sử ký",
    traloi:["Ngô Sỹ Liên","Lê Văn Hưu","Phan Huy Chú","Đáp án Khác"],
    vitri:1
}, {
    question:"Thành phần hóa học chủ yếu của tro bếp là nguyên tố nào ?",
    traloi:["Canxi","Natri","Kali","Photpho"],
    vitri:2
}, {
    question:"Vợ chồng A Phủ thuộc dân tộc nào ?",
    traloi:[ "Dân tộc Tày","Dân tộc Mường","Dân tộc Thái","Dân tộc H'Mông"],
    vitri:3
}, {
    question:"Đồng tiền đầu tiên của nước ta xuất hiện từ thời nào ?",
    traloi:["Triều Lý","Triều Đinh","Triều Lê","Triều Trần"],
    vitri:1
}, {
    question:"Tóc nâu môi trầm là tên bài hát gắn liền với ca sỹ nào ?",
    traloi:["Mỹ Linh","Hồng Ngọc","Mỹ Tâm","Đan Trường"],
    vitri:2
}, {
    question:"Quốc gia nào là quê hương của cây xoài ?",
    traloi:["Trung Quốc","Ấn Độ","Pháp","Việt Nam"],
    vitri:1
}, {
    question:"Bộ phận hô hấp của châu chấu ?",
    traloi:["Mũi","Tai","Bụng", "Lưng"],
    vitri:2
}, {
    question: "Cuốn theo chiều gió lần đầu tiên xuất bản vào năm nào ?",
    traloi:["1930","1936","1946","1956"],
    vitri:1
}, {
    question: "Ai không phải là 1 trong tứ đại mỹ nhân Trung Quốc ?",
    traloi:["Tây Thi","Điêu Thuyền","Triệu Cơ","Vương Chiêu Quân"],
    vitri:2
}];