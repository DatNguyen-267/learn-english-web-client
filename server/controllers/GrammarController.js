import { GrammarTopicModel } from "../models/GramarTopicModel.js";
import { GrammarPartModel } from "../models/GramarPartModel.js";

export const getAllGrammarTopic = async(req,res) => {
    try {
      // Tạo dữ liệu mẫu 1 lần xong xóa đi

      // const newGrammarPart = GrammarPartModel(
      //   {
      //     name:"Simple present: Thì hiện tại đơn",
      //      content: ` <div class="last-content">
      //      <p><span style="font-size:14px"><strong><span style="color:#0099ff"><span
      //        style="font-family:arial,helvetica,sans-serif">I. ĐỊNH NGHĨA VỀ HIỆN TẠI
      //        ĐƠN</span></span></strong></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>Thì hiện tại đơn</strong> (Simple present) là
      //              một thì trong tiếng Anh hiện đại. Hiện tại đơn dùng để diễn tả một hành động chung chung, tổng quát
      //              lặp đi lặp lại nhiều lần hoặc một sự thật hiển nhiên hoặc một hành động diễn ra trong thời gian hiện
      //              tại.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#0099ff"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">II. CẤU TRÚC VỀ THÌ HIỆN TẠI
      //                ĐƠN</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">1. Cấu Trúc Thì Hiện Tại Đơn Với Động Từ "TO
      //                BE"</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Đối với cấu trúc của các THÌ, chúng ta chỉ cần quan
      //              tâm đến chủ ngữ và động từ chính, còn các thành phần khác như tân ngữ, trạng từ, … thì tùy từng câu
      //              mà có cấu trúc khác nhau.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Ở đây: “to be” ở hiện tại có 3 dạng: <strong>am/ is/
      //                are</strong></span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">A. Khẳng định:</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>- Cấu trúc: &nbsp; &nbsp;</strong>
      //              &nbsp;</span></span></span></p>

      //      <p style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>S&nbsp;+ am / is /
      //                are</strong></span></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">&nbsp;- Trong đó: &nbsp;
      //              </span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">S (subject): Chủ ngữ</span></span></em></span>
      //        </li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">&nbsp;- Lưu ý:</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">&nbsp;Khi <strong>S = I +
      //                    am</strong></span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">&nbsp;Khi <strong>S = He/ She/ It +
      //                    is</strong></span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">&nbsp;Khi <strong>S = We, You, They +
      //                    are</strong></span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">&nbsp;I <u><strong>am</strong></u> a doctor.
      //                </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Tôi là bác sĩ.)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">&nbsp;She <u><strong>is</strong></u> very
      //                  beautiful. </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Cô ấy rất xinh đẹp.)</span></span></em></span>
      //        </li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">&nbsp;We <u><strong>are</strong></u> friends.
      //                </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Chúng tôi là bạn bè.)</span></span></em></span>
      //        </li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">&nbsp;=&gt; Ta thấy với chủ ngữ khác nhau động từ “to
      //              be” chia khác nhau.&nbsp;</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">B. Phủ định:</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">- Cấu trúc: &nbsp; &nbsp;
      //                &nbsp;</span></span></strong></span></p>

      //      <p style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>S + am/ is/ are +
      //                not</strong></span></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">- Lưu ý:</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">Am not: không có dạng viết
      //                  tắt</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">Is not = isn't</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">Are not = aren't</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">I <u><strong>am not</strong></u> a good student.
      //                </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Tôi không phải là học sinh
      //                  giỏi.)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">He <u><strong>isn't</strong></u> my bother.
      //                </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Anh ấy không phải là anh trai của
      //                  tôi.)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">They <u><strong>aren't</strong></u> Korean.
      //                </span></span><span style="color:#008000"><span style="font-family:arial,helvetica,sans-serif">(Họ
      //                  không phải là người người Hàn Quốc.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">C. Câu hỏi:</span></strong></span></span></p>

      //      <p style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>Am/ Is/ Are +
      //                &nbsp;S?</strong></span></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">- Trả lời: &nbsp; &nbsp;
      //                &nbsp;</span></span></strong></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">Yes, &nbsp;I + am.</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">Yes, he/ she/ it + is.</span></span></span>
      //            </td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">Yes, we/ you/ they + are.</span></span></span>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">No, I + am not.</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">No, he/ she/ it + isn't.</span></span></span>
      //            </td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">No, we/ you/ they +
      //                    aren't.</span></span></span></td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><u><strong>Are</strong></u> you a student? - Yes,
      //                  I am/ No, I am not.</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><u><strong>Am</strong></u> I a bad person? - Yes,
      //                  you are./ No, you aren't.</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><u><strong>Is</strong></u> he 19 years old? -
      //                  Yes, he is./ No, he isn't.</span></span></em></span></li>
      //      </ul>
      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">2. Cấu Trúc Thì Hiện Tại Đơn Với Động Từ
      //                THƯỜNG</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">A. Khẳng định:</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">- Cấu Trúc:</span></span></strong></span></p>

      //      <p style="text-align:center"><span style="font-size:14px"><strong><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">S + V(s/es)</span></span></strong></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>- Trong đó: &nbsp;
      //                &nbsp;</strong>&nbsp;</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">&nbsp; S (subject): Chủ
      //                  ngữ&nbsp;</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">&nbsp; V (verb): Động
      //                  từ&nbsp;</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">- Lưu ý:</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><strong>S = I, We, You, They</strong>,<strong>
      //                    danh từ số nhiều</strong> thì ĐỘNG TỪ ở dạng NGUYÊN MẪU&nbsp;</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><strong>S = He, She, It, danh từ số ít</strong>
      //                  thì ĐỘNG TỪ thêm “S” hoặc ES”&nbsp;</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><u><strong>They go</strong></u> to work by bus
      //                  every day. </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Họ đi làm bằng xe buýt hàng
      //                  ngày.)</span></span><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">&nbsp;</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Ở ví dụ này, chủ ngữ là “They” nên động từ chính “go”
      //              ta để ở dạng NGUYÊN MẪU không chia.&nbsp;</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif"><u><em><strong>He goes</strong></em></u> <em>to
      //                  work by bus every day.&nbsp;</em></span></span><span style="color:#008000"><span
      //                style="font-family:arial,helvetica,sans-serif"><em>(Anh ấy đi làm bằng xe buýt hàng
      //                  ngày.)&nbsp;</em></span></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Trong câu này, chủ ngữ là “He” nên động từ
      //              chính “go” phải thêm “es”.&nbsp;</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">&nbsp;(Ta sẽ tìm hiểu về quy tắc thêm “S” hoặc “ES”
      //              sau động từ ở phần sau.)&nbsp;</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">B. Phủ định:</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">- Cấu Trúc</span></span></strong></span></p>

      //      <p style="text-align:center"><span style="font-size:14px"><strong><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">S + don't/ doesn't &nbsp;+ V(nguyên
      //                mẫu)</span></span></strong></span></p>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">- Ta có:&nbsp;</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">&nbsp;don't = do not</span></span></em></span>
      //        </li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">&nbsp;doesn't = does
      //                  not</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">- Lưu ý:</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><strong>S = I, We, You, They, danh từ số
      //                    nhiều</strong> &nbsp;- Ta mượn trợ động từ “do” + not</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><strong>S = He, She, It, danh từ số ít</strong> -
      //                  Ta mượn trợ động từ “does” + not</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">Động từ (V) theo sau ở dạng NGUYÊN MẪU không
      //                  chia.</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">We <u><strong>don't go</strong></u> to school on
      //                  Sunday. </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Chúng tôi không đến trường vào ngày Chủ
      //                  Nhật.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Trong câu này, chủ ngữ là “We” nên ta mượn trợ động
      //              từ “do” + not (don't), và động từ “go” theo sau ở dạng NGUYÊN MẪU.</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">She <u><strong>doesn't visit</strong></u> his
      //                  grandparents regularly. </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Cô ấy không đến thăm ông bà thường
      //                  xuyên)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Tại câu này, chủ ngữ là “She” nên ta mượn trợ
      //              động từ “does” + not (doesn't), và động từ “visit” theo sau ở dạng NGUYÊN MẪU.</span></span></span>
      //      </p>

      //      <p><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">C. Câu hỏi:</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">- Cấu Trúc</span></span></strong></span></p>

      //      <p style="text-align:center"><span style="font-size:14px"><strong><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">Do/ Does &nbsp; + &nbsp; S &nbsp; + V(nguyên
      //                mẫu)?</span></span></strong></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>- Trả lời: &nbsp;</strong> &nbsp; &nbsp;
      //              &nbsp; &nbsp;</span></span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">Yes, I/we/you/they + do.</span></span></span>
      //            </td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">Yes, he/she/it + does.</span></span></span>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">No, I/ we/you/they + don't</span></span></span>
      //            </td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">No, he/ she/ it + doesn't.</span></span></span>
      //            </td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><br>
      //        <span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>- Lưu ý:&nbsp;</strong></span></span></span>
      //      </p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><strong>S = I, We, You, They, danh từ số
      //                    nhiều</strong> &nbsp;- Ta mượn trợ động từ “Do” đứng trước chủ ngữ.</span></span></em></span>
      //        </li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><strong>S = He, She, It, danh từ số ít</strong> -
      //                  Ta mượn trợ động từ “Does” đứng trước chủ ngữ.</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">Động từ chính trong câu ở dạng NGUYÊN
      //                  MẪU.</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><u><strong>Do</strong></u> you
      //                  <u><strong>stay</strong></u> with your family? </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Bạn có ở cùng với gia đình
      //                  không?)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><strong>Yes, I do./ No, I
      //                    don't.&nbsp;</strong></span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Có, mình ở cùng với gia đình./ Không, mình không
      //                  ở cùng.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Ở ví dụ này, chủ ngữ là “you” nên ta mượn trợ
      //              động từ “Do” đứng trước chủ ngữ, động từ chính “stay” ở dạng nguyên mẫu.</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><u><strong>Does</strong></u> your sister
      //                  <u><strong>like</strong></u> reading books? </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Chị của bạn có thích đọc sách
      //                  không?)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><strong>Yes, she does./ No, she doesn't.</strong>
      //                </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Có, chị ấy thích đọc sách./ Không, chị ấy không
      //                  thích.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Trong câu này, chủ ngữ là “your sister” (tương
      //              ứng với ngôi “she”) nên ta mượn trợ động từ “Does” đứng trước chủ ngữ, động từ chính “like” ở dạng
      //              nguyên thể.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#0099ff"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">III CÁCH SỬ DỤNG THÌ HIỆN TẠI
      //                ĐƠN</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">1. Dùng để diễn tả một hành động, sự việc diễn ra
      //                thường xuyên, lặp đi lặp lại hay một thói quen.</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">I brush my teeth <u><strong>every
      //                      day</strong></u>. </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Tôi đánh răng mỗi
      //                  ngày.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Ta thấy việc đánh răng được lặp đi lặp lại hàng
      //              ngày nên ta sẽ sử dụng thì hiện tại đơn để diễn tả. Vì chủ ngữ là “I” nên động từ “brush” ở dạng
      //              nguyên thể.</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">My father <u><strong>usually</strong></u> goes to
      //                  work by motorbike. </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(ba tôi thường đi làm bằng xe
      //                  máy)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Việc đi làm bằng xe máy cũng xảy ra thường
      //              xuyên nên ta sẽ sử dụng thì hiện tại đơn. Vì chủ ngữ là “my father” (tương ứng với “he”) nên động từ
      //              “go” thêm “es”.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">2. Diễn tả một sự thật hiển nhiên, một chân
      //                lý.</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">The sun <u><strong>rises</strong></u> in the East
      //                  and <u><strong>sets</strong></u> in the West. </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Mặt trời mọc hướng Đông và lặn hướng
      //                  Tây)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Đây là một sự thật hiển nhiên nên ta sử dụng
      //              thì hiện tại đơn để diễn tả. Chủ ngữ là “the sun” (số ít, tương ứng với “it”) nên động từ “rise” và
      //              “set” ta phải thêm “s”.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">3. Diễn tả sự việc sẽ xảy xa theo lịch trình, thời
      //                gian biểu rõ ràng như giờ tàu, máy bay chạy.</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">The train <u><strong>leaves</strong></u> at 6 pm
      //                  today. </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Tàu sẽ rời đi vào lúc 6h chiều ngày hôm
      //                  nay.)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">The flight <u><strong>starts</strong></u> at 10
      //                  am tomorrow. </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Chuyến bay sẽ bắt đầu vào lúc 10h sáng ngày
      //                  mai.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Mặc dù việc “tàu rời đi” hay “Chuyến bay bắt
      //              đầu” chưa xảy ra nhưng vì nó là một lịch trình nên ta sử dụng thì hiện tại đơn. Chủ ngữ là “the
      //              train” và “the flight” (số ít, tương ứng với “it”) nên động từ “leave” và “starts” ta phải thêm
      //              “s”.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">4. Diễn tả suy nghĩ, cảm xúc, cảm
      //                giác.</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">I <u><strong>think</strong></u> that your brother
      //                  is a good person. </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Tôi nghĩ rằng anh trai bạn là một người
      //                  tốt.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Động từ chính trong câu này là “think” diễn tả
      //              “suy nghĩ” nên ta sử dụng thì hiện tại đơn. Vì chủ ngữ là “I” nên động từ “think” không chia và ở
      //              dạng nguyên mẫu.</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">He <u><strong>feels</strong></u> very tired now.
      //                </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Bây giờ anh ấy cảm thấy rất
      //                  mệt.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Động từ “feel” có nghĩa là “cảm thấy” chỉ cảm
      //              giác nên ta sử dụng thì hiện tại đơn. Vì chủ ngữ là “he” nên động từ “feel” phải thêm
      //              “s”.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#0099ff"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">IV.&nbsp;DẤU HIỆU NHẬN BIẾT THÌ HIỆN TẠI ĐƠN TRONG
      //                TIẾNG ANH</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">- Khi trong các câu xuất hiện các trạng từ chỉ tần
      //                suất:</span></strong></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">Always (luôn luôn), usually (thường xuyên), often
      //                  (thường xuyên), frequently (thường xuyên) , sometimes (thỉnh thoảng), seldom (hiếm khi), rarely
      //                  (hiếm khi), hardly (hiếm khi) , never (không bao giờ), generally (nhìn chung), regularly (thường
      //                  xuyên).</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">Every day, every week, every month, every
      //                  year,……. (Mỗi ngày, mỗi tuần, mỗi tháng, mỗi năm)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">Once/ twice/ three times/ four times….. a day/
      //                  week/ month/ year,……. (một lần / hai lần/ ba lần/ bốn lần ……..một ngày/ tuần/ tháng/
      //                  năm)&nbsp;</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">- Vị trí của trạng từ chỉ tuần suất trong
      //                câu:</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Các trạng từ: Always, usually, often, sometimes,
      //              rarely, seldom - đứng trước động từ thường, đứng sau động từ “to be” và trợ động từ
      //              .</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">She <u><strong>rarely goes</strong></u> to school
      //                  by bus. </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Cô ấy hiếm khi đi học bằng xe
      //                  bus)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">He <u><strong>is usually</strong></u> at home in
      //                  the evening. </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Anh ta thường ở nhà vào buổi
      //                  tối.)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">I <strong>don't often</strong> go out with my
      //                  friends. </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Tôi không thường đi ra ngoài với bạn
      //                  bè)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#0099ff"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">V.&nbsp;QUY TẮC THÊM “S” HOẶC “ES” SAU ĐỘNG
      //                TỪ</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">1. Thông thường ta thêm “s” vào sau các động
      //                từ.</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">- Eg:</span></span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">work - works</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">read - reads</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">speak - speaks</span></span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">love - loves</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">see - sees</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">drink - drinks</span></span></span></td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><span style="font-size:14px"><span style="color:#ff8c00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">2. Những động từ tận cùng bằng: -s; -sh; -ch; -z;
      //                -x; -o ta thêm “es”.</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">- Eg:</span></span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">miss - misses</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">watch - watches</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">mix - mixes</span></span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">wash - washes</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">buzz - buzzes</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">go - goes</span></span></span></td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">3. Những động từ tận cùng là
      //                “y”:</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">- Nếu trước “y” là một nguyên âm (a, e, i, o, u) -
      //                ta giữ nguyên “y” + “s”</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">+ Eg:&nbsp;</span></span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">play - plays</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">buy - buys &nbsp;&nbsp;</span></span></span>
      //            </td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">pay - pays</span></span></span></td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">- Nếu trước “y” là một phụ âm - ta đổi “y” thành
      //                “i” + “es”</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">+ Eg: &nbsp; </span></span><strong><span
      //              style="color:#000000"><span style="font-family:arial,helvetica,sans-serif">&nbsp;
      //                &nbsp;&nbsp;</span></span></strong></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">&nbsp;&nbsp;fly - flies
      //                    &nbsp;</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">cry - cries &nbsp;</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><span
      //                    style="font-family:arial,helvetica,sans-serif">fry - fries</span></span></span></td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">4. Trường hợp đặc
      //                biêt:</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">- Ta có: <strong>have -
      //                has</strong></span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Động từ “have” khi đi với chủ ngữ là ngôi thứ 3 số ít
      //              sẽ không thêm “s” mà biến đổi thành “has”.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">+ Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">They <u><strong>have</strong></u> three children.
      //                  (Họ có 3 người con.)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">She <u><strong>has</strong></u> two children. (Cô
      //                  ấy có 2 người con.)<em><span style="color:#000000"><span
      //                        style="font-family:arial,helvetica,sans-serif">​</span></span></em></span></span></em></span>
      //        </li>
      //      </ul>

      //      <p style="text-align:center"><span style="font-size:14px"><span
      //            style="color:#000000"><strong>-----</strong></span></span></p>

      //      <p></p>
      //    </div>`
      //   }
      // )
      // await newGrammarPart.save()
      // const newGrammarPart2 = GrammarPartModel(
      //   {
      //     name:"Present Continuous: Thì hiện tại tiếp diễn",
      //      content: ` <div class="last-content">

      //      <p><span style="font-size:14px"><span style="color:#0099ff"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>I. ĐỊNH NGHĨA VỀ HIỆN TẠI TIẾP
      //                DIỄN</strong></span></span></span></p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000"><strong>Thì hiện tại tiếp diễn</strong> (present continuous tense) là một thì
      //              trong tiếng Anh hiện đại. Nó&nbsp;dùng để diễn tả những sự việc xảy ra ngay lúc chúng ta nói hay
      //              xung quanh thời điểm nói, và hành động chưa chấm dứt (còn tiếp tục diễn ra).</span></span></span>
      //      </p>

      //      <p><span style="font-size:14px"><span style="color:#0099ff"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>II. CẤU TRÚC VỀ THÌ HIỆN TẠI TIẾP
      //                DIỄN</strong></span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>1. Khẳng định:</strong></span></span></span>
      //      </p>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Cấu trúc:&nbsp;</span></span></strong></span></p>

      //      <p style="text-align:center"><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">S + am/ is/ are +
      //                V-ing</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000"><strong>- Trong đó: &nbsp;</strong> &nbsp;</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">S (subject): Chủ ngữ</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">am/ is/ are: là 3 dạng của động từ “to be”</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">V-ing: là động từ thêm “-ing”</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Lưu ý:</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">S = I + am</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">S = He/ She/ It + is</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">S = We/ You/ They + are</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">- Example:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">I <u><strong>am playing</strong></u> badminton with my friends .
      //                </span><span style="color:#008000">(Tôi đang chơi cầu lông với bạn tôi.)</span></span></em></span>
      //        </li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">He <u><strong>is cooking</strong></u> with his mother. </span><span
      //                  style="color:#008000">(Anh ấy đang nấu ăn với mẹ của anh ấy.)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">We <u><strong>are studying</strong></u> English. </span><span
      //                  style="color:#008000">(Chúng tôi đang học tiếng Anh.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">=&gt; Ta thấy động từ trong câu sử dụng thì hiện tại tiếp diễn cần phải có hai
      //              thành phần là: động từ “TO BE” và “V-ing”. Tùy từng chủ ngữ mà động từ “to be” có cách chia khác
      //              nhau.</span></span></span></p>



      //      <p>&nbsp;</p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">2. Phủ định:</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Cấu trúc:</span></span></strong></span></p>

      //      <p style="text-align:center"><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">S + am/ is/ are + not +
      //                V-ing</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Lưu ý:</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">Am not: không có dạng viết tắt</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">Is not = isn't</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">Are not = aren't</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Example:</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">I am not <u><strong>listening to music</strong></u> at the moment.
      //                </span><span style="color:#008000">(Tôi không nghe nhạc vào lúc này.)</span></span></em></span>
      //        </li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">My sister <u><strong>isn't working</strong></u> now. </span><span
      //                  style="color:#008000">(Bây giờ chị gái tôi không làm việc)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">They <u><strong>aren't watching</strong></u> the TV at present.
      //                </span><span style="color:#008000">(Hiện tại họ không xem ti vi.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">=&gt; Đối với câu phủ định của thì hiện tại tiếp diễn ta chỉ cần thêm “not”
      //              vào sau động từ “to be” rồi cộng động từ đuôi “-ing”.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">3. Câu hỏi:</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Cấu trúc:</span></span></strong></span></p>

      //      <p style="text-align:center"><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">Am/ Is/ Are + S +
      //                V-ing?</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Trả lời:</span></span></strong></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="font-family:arial,helvetica,sans-serif"><span style="color:#000000">Yes, I +
      //                    am</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="font-family:arial,helvetica,sans-serif"><span style="color:#000000">Yes, he/ she/ it +
      //                    is</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="font-family:arial,helvetica,sans-serif"><span style="color:#000000">Yes, we/ you/ they +
      //                    are.</span></span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="font-family:arial,helvetica,sans-serif"><span style="color:#000000">No, I + am
      //                    not</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="font-family:arial,helvetica,sans-serif"><span style="color:#000000">No, he/ she/ it +
      //                    isn't</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="font-family:arial,helvetica,sans-serif"><span style="color:#000000">No, we/ you/ they +
      //                    aren't.</span></span></span></td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">=&gt; Đối với câu hỏi ta chỉ việc đảo động từ “to be” lên trước chủ
      //              ngữ.</span></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Example:</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000"><u><strong>Are</strong></u> you <u><strong>doing</strong></u> your
      //                  homework? </span><span style="color:#008000">(Bạn đang làm bài tập về nhà phải
      //                  không?)</span><br>
      //                <span style="color:#000000">Yes, I am./ No, I am not.</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000"><u><strong>Is</strong></u> he <strong><u>going</u></strong> out with you?
      //                </span><span style="color:#008000">(Anh ấy đang đi chơi cùng bạn có phải không?)</span><br>
      //                <span style="color:#000000">Yes, he is./ No, he isn't.</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#0099ff"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">II- CÁCH SỬ DỤNG CỦA THÌ HIỆN TẠI TIẾP
      //                DIỄN</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">1. Diễn tả một hành động đang xảy ra ngay tại thời
      //                điểm nói.</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Example:</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">We <u><strong>are studying</strong></u> Maths <u>now</u>. </span><span
      //                  style="color:#008000">(Bây giờ chúng tôi đang học toán)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">=&gt; Chúng ta thấy tại thời điểm nói (bây giờ) thì việc học toán đang diễn ra
      //              nên ta sử dụng thì hiện tại tiếp diễn để diễn đạt.</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">She <u><strong>is walking</strong></u> to school <u>at the moment</u>.
      //                </span><span style="color:#008000">(Lúc này cô ấy đang đi bộ tới
      //                  trường.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">=&gt; Vào thời điểm nói (lúc này) thì việc cô ấy đi bộ tới trường đang diễn ra
      //              nên ta sử dụng thì hiện tại tiếp diễn để diễn đạt.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">2. Diễn tả sự việc đang diễn ra xung quanh thời
      //                điểm nói.</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Example:</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">I <u><strong>am looking</strong></u> for a job.</span><span
      //                  style="color:#008000"> (Tôi đang tìm việc.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">=&gt; Tại lúc nói người nói vẫn không đi nộp hồ sơ hay để tìm việc mà trong
      //              thời gian đó (có thể bắt đầu trước đó cả tháng) người nói đang tìm kiếm một công việc. Nhưng khi
      //              muốn nói chung chung rằng điều gì đang xảy ra xung quanh thời điểm đó ta cũng sử dụng thì hiện tại
      //              tiếp diễn.</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">I <u><strong>am working</strong></u> for BIDV company. </span><span
      //                  style="color:#008000">(Tôi đang làm việc cho công ty BIDV)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">=&gt; Tương tự như câu trên, “làm việc cho công ty BIDV không phải mới bắt đầu
      //              mà đã bắt đầu trước đó rồi. Nhưng người nói muốn diễn đạt rằng sự việc đó đang diễn
      //              ra.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">3. Diễn tả một sự việc sẽ xảy ra trong tương lai
      //                theo một kế hoạch đã được lên lịch sẵn.</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Example:</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">&nbsp;I bought the ticket yesterday. I <u><strong>am flying</strong></u>
      //                  to New York tomorrow.</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">=&gt; Ta thấy có căn cứ, kế hoạch rõ ràng (tôi đã mua vé máy bay) nên ta sử
      //              dụng thì hiện tại tiếp diễn để nói về một việc chắc chắn sẽ xảy ra trong tương
      //              lai.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">4. Diễn tả sự không hài lòng hay phàn nàn về việc
      //                gì trong câu sử dụng “always, continually”.</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Example:</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">He <u><strong>is always coming</strong></u> late. (Anh ta toàn đến
      //                  muộn.)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">Why <u><strong>are you always putting</strong></u> your dirty clothes on
      //                  your bed? </span><span style="color:#008000">(Sao lúc nào con cũng để quần áo bẩn trên giường
      //                  thế hả?)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">=&gt; Ta thấy “always” là một trạng từ chỉ tần suất và thường được gặp trong
      //              thì hiện tại đơn. Nhưng đó là khi đơn thuần muốn nói đến tần suất diễn ra của một sự việc nào đó. Ví
      //              dụ như: “She always goes to school at 7.30 am.” (Cô ấy luôn đi học vào lúc 7h30). Nhưng khi muốn
      //              diễn đạt sự khó chịu hay muốn phàn nàn về điều gì ta sử dụng thì hiện tại tiếp diễn để
      //              nói.)</span></span></span></p>



      //      <p><span style="font-size:14px"><strong><span style="color:#0099ff"><span
      //                style="font-family:arial,helvetica,sans-serif">III DẤU HIỆU NHẬN BIẾT THÌ HIỆN TẠI TIẾP
      //                DIỄN</span></span></strong></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>- Trong câu có các trạng từ chỉ thời
      //                gian:</strong></span></span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="font-family:arial,helvetica,sans-serif"><span style="color:#000000">Now: bây
      //                    giờ</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="font-family:arial,helvetica,sans-serif"><span style="color:#000000">Right now: Ngay bây
      //                    giờ</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="font-family:arial,helvetica,sans-serif"><span style="color:#000000">At the moment: lúc
      //                    này</span></span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="font-family:arial,helvetica,sans-serif"><span style="color:#000000">At present: hiện
      //                    tại</span></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="font-family:arial,helvetica,sans-serif"><span style="color:#000000">At + giờ cụ thể (at
      //                    12 o'lock)</span></span></span></td>
      //            <td>&nbsp;</td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">- Trong câu có các động từ
      //                như:</span></strong></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000"><strong>Look! (Nhìn kìa!) </strong><br>
      //                <em>Exp:&nbsp;Look! The train is coming. </em></span><span style="color:#008000"><em>(Nhìn kia!
      //                  tàu đang đến.)</em></span></span></span></li>
      //        <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000"><strong>Listen! (Hãy nghe này!) </strong><br>
      //                <em>Exp: Listen! Someone is crying. </em></span><span style="color:#008000"><em>(Nghe này! Ai đó
      //                  đang khóc.)&nbsp;</em></span></span></span></li>
      //        <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000"><strong>Keep silent! (Hãy im lặng) </strong><br>
      //                <em>Exp:&nbsp;Keep silent! The baby is sleeping. </em></span><span style="color:#008000"><em>(Hãy
      //                  im lặng! Em bé đang ngủ.)</em></span></span></span></li>
      //      </ul>

      //      <p style="text-align:center"><span style="font-size:14px"><span
      //            style="color:#000000"><strong>-----</strong></span></span></p>


      //    </div>`
      //   }
      // )
      // await newGrammarPart2.save()
      // const newGrammarPart3 = GrammarPartModel(
      //   {
      //     name:"Present Perfect: Thì hiện tại hoàn thành",
      //      content: `<div class="last-content">
      //      <p><span style="font-size:14px"><span style="color:#0099ff"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>I. ĐỊNH NGHĨA VỀ THÌ HIỆN TẠI HOÀN
      //                THÀNH</strong></span></span></span></p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000"><strong>Thì hiện tại hoàn thành</strong> (present perfect tense) là một thì
      //              trong tiếng Anh hiện đại. Dùng để diễn tả về một hành động đã hoàn thành cho tới thời điểm hiện tại
      //              mà không bàn về thời gian diễn ra nó.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#0099ff"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>II. CẤU TRÚC VỀ THÌ HIỆN TẠI HOÀN
      //                THÀNH</strong></span></span></span></p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#ffa500"><strong>1. Khẳng định:</strong></span><br>
      //            <span style="color:#000000"><strong>- Cấu trúc:&nbsp;</strong></span></span></span></p>

      //      <p style="text-align:center"><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">S + have/ has + Vpp</span></strong></span></span>
      //      </p>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Trong đó: &nbsp; &nbsp; &nbsp;</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">S (subject): chủ ngữ</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">Have/ has: trợ động từ</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">Vpp:&nbsp;Quá khứ phân từ&nbsp;</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Lưu ý:&nbsp;</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">S = I/ We/ You/ They + have</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">S = He/ She/ It + has</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">I <u><strong>have graduated</strong></u> from my university since 2013.
      //                </span><span style="color:#008000">(Tôi tốt nghiệp đại học từ năm 2013.)</span></span></em></span>
      //        </li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">She <u><strong>has lived</strong></u> here for one year. </span><span
      //                  style="color:#008000">(Cô ấy sống ở đây được một năm rồi.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#ffa500"><strong>2. Phủ định:</strong></span><br>
      //            <span style="color:#000000"><strong>- Cấu trúc:&nbsp;</strong></span></span></span></p>

      //      <p style="text-align:center"><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">S + haven't / hasn't +
      //                Vpp</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">=&gt; Câu phủ định trong thì hiện tại hoàn thành ta chỉ cần thêm “not” vào sau
      //              “have/ has”.</span></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Lưu ý:</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">haven't = have not</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">hasn't = has not</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">We <u><strong>haven't met</strong></u> each other for a long time.
      //                </span><span style="color:#008000">(Chúng tôi không gặp nhau trong một thời gian dài
      //                  rồi.)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">He <u><strong>hasn't come</strong></u> back his hometown since 1995.
      //                </span><span style="color:#008000">(Anh ấy không quay trở lại quê hương của mình từ năm
      //                  1995.)</span></span></em></span></li>
      //      </ul>

      //      <p><br>
      //        <span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">3. Câu hỏi:</span></strong></span></span>
      //      </p>

      //      <p style="text-align:center"><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">Have/ Has + S + Vpp ?</span></strong></span></span>
      //      </p>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">- Trả lời:&nbsp;</span></span></strong></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="color:#000000; font-family:arial,helvetica,sans-serif">Yes, I/ we/ you/ they +
      //                  have</span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="color:#000000; font-family:arial,helvetica,sans-serif">Yes, he/ she/ it +
      //                  has.</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="color:#000000; font-family:arial,helvetica,sans-serif">No, I/ we/ you/ they +
      //                  haven't</span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="color:#000000; font-family:arial,helvetica,sans-serif">No, he/ she/ it +
      //                  hasn't.</span></span></td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">=&gt; Câu hỏi trong thì hiện tại hoàn thành ta chỉ cần đảo trợ động từ “have/
      //              has” lên trước chủ ngữ, động từ theo sau ở dạng quá khứ phân từ.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">- Eg:&nbsp;</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000"><u><strong>Have</strong></u> you ever <u><strong>travelled</strong></u> to
      //                  Thailand? </span><span style="color:#008000">(Bạn đã từng du lịch tới Thái Lan bao giờ
      //                  chưa?)</span><br>
      //                <span style="color:#000000"><span style="font-family:arial,helvetica,sans-serif"><span
      //                      style="color:#000000">Yes, I have./ No, I haven't.</span></span></span></span></em></span>
      //        </li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000"><u><strong>Has</strong></u> she <u><strong>arrived</strong></u> London
      //                  yet? </span><span style="color:#008000">(Cô ấy đã tới Luân Đôn chưa?)</span><br>
      //                <span style="color:#000000"><span style="font-family:arial,helvetica,sans-serif"><span
      //                      style="color:#000000">Yes, she has./ No, she hasn't.</span></span></span></span></em></span>
      //        </li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#0099ff"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">&nbsp;II CÁCH SỬ DỤNG CỦA THÌ HIỆN TẠI HOÀN
      //                THÀNH</span></strong></span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center">
      //              <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                      style="color:#000000"><strong>Cách dùng thì Hiện tại hoàn
      //                        thành</strong></span></span></span></p>
      //            </td>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><strong>Ví
      //                      Dụ</strong></span></span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify">
      //              <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                      style="color:#000000">- Hành động đã hoàn thành cho tới thời điểm hiện tại mà không đề cập
      //                      tới nó xảy ra khi nào.</span></span></span></p>
      //            </td>
      //            <td style="text-align:justify">
      //              <ul>
      //                <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                          style="color:#000000">&nbsp;I've done all my homeworks</span><br>
      //                        <span style="color:#008000"><span style="font-family:arial,helvetica,sans-serif">( Tôi đã
      //                            làm hết bài tập về nhà )</span></span></span></em></span></li>
      //              </ul>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="font-family:arial,helvetica,sans-serif"><span style="color:#000000">- Hành động bắt đầu ở
      //                    quá khứ và đang tiếp tục ở hiện tại</span></span></span></td>
      //            <td>
      //              <ul>
      //                <li style="text-align:justify"><span style="font-size:14px"><em><span
      //                        style="font-family:arial,helvetica,sans-serif"><span style="color:#000000">They've been
      //                          married for nearly Forty years</span><br>
      //                        <span style="color:#008000">( Họ đã kết hôn được 40 năm. )</span></span></em></span></li>
      //                <li style="text-align:justify"><span style="font-size:14px"><em><span
      //                        style="font-family:arial,helvetica,sans-serif"><span style="color:#000000">He has lived in
      //                          Liverpool all his life</span><br>
      //                        <span style="color:#008000">(Anh ấy đã sống cả đời ở Liverpool.
      //                          )</span></span></em></span></li>
      //              </ul>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify">
      //              <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                      style="color:#000000">- Hành động đã từng làm trước đây và bây giờ vẫn còn
      //                      làm</span></span></span></p>
      //            </td>
      //            <td style="text-align:justify">
      //              <ul>
      //                <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                          style="color:#000000">She has written three books and she is working on another book
      //                        </span></span><br>
      //                      <span style="color:#008000"><span style="font-family:arial,helvetica,sans-serif">Cô ấy đã
      //                          viết được 3 cuốn sách và đang viết cuốn tiếp theo</span></span></em></span></li>
      //              </ul>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify">
      //              <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                      style="color:#000000">- Một kinh nghiệm cho tới thời điểm hiện tại (thường dùng trạng từ
      //                      ever )</span></span></span></p>
      //            </td>
      //            <td style="text-align:justify">
      //              <ul>
      //                <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                        style="color:#000000"><em>My last birthday was the worst day I've ever had
      //                        </em></span><br>
      //                      <span style="color:#008000"><span style="font-family:arial,helvetica,sans-serif"><em>Sinh
      //                            nhật năm ngoái là ngày tệ nhất đời tôi</em></span></span></span></span></li>
      //              </ul>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify">
      //              <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                      style="color:#000000">- Về một hành động trong quá khứ nhưng quan trọng tại thời điểm
      //                      nói</span></span></span></p>
      //            </td>
      //            <td style="text-align:justify">
      //              <ul>
      //                <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                        style="color:#000000"><em>I can't get my house. I've lost my keys.</em></span><br>
      //                      <span style="color:#008000"><em>(Tôi không thể vào nhà được.Tôi đánh mất chùm chìa khóa của
      //                          mình rồi )</em></span></span></span></li>
      //              </ul>
      //            </td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p>&nbsp;</p>

      //      <p><span style="font-size:14px"><span style="color:#0099ff"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">III. DẤU HIỆU NHẬN BIẾT THÌ HIỆN TẠI HOÀN
      //                THÀNH</span></strong></span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //        <tbody>
      //          <tr>
      //            <td>
      //              <ul>
      //                <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                        style="color:#000000">Just, recently, lately: gần đây, vừa mới</span></span></span></li>
      //              </ul>
      //            </td>
      //            <td>
      //              <ul>
      //                <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                        style="color:#000000">For + N - quãng thời gian: trong khoảng (for a year, for a long
      //                        time, …)</span></span></span></li>
      //              </ul>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td>
      //              <ul>
      //                <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                        style="color:#000000">Already: rồi</span></span></span></li>
      //              </ul>
      //            </td>
      //            <td>
      //              <ul>
      //                <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                        style="color:#000000">Since + N - mốc/điểm thời gian: từ khi (since 1992, since June,
      //                        …)</span></span></span></li>
      //              </ul>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td>
      //              <ul>
      //                <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                        style="color:#000000">Before: trước đây</span></span></span></li>
      //              </ul>
      //            </td>
      //            <td>
      //              <ul>
      //                <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                        style="color:#000000">Yet: chưa (dùng trong câu phủ định và câu hỏi)</span></span></span>
      //                </li>
      //              </ul>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td>
      //              <ul>
      //                <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                        style="color:#000000">Ever: đã từng</span></span></span></li>
      //              </ul>
      //            </td>
      //            <td>
      //              <ul>
      //                <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                        style="color:#000000">So far = until now = up to now = up to the present: cho đến bây
      //                        giờ</span></span></span></li>
      //              </ul>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td>
      //              <ul>
      //                <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                        style="color:#000000">Never: chưa từng, không bao giờ</span></span></span></li>
      //              </ul>
      //            </td>
      //            <td>&nbsp;</td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p style="text-align:center"><span style="font-size:14px"><span
      //            style="color:#000000"><strong>-----</strong></span></span></p>


      //    </div>`
      //   }
      // )
      // await newGrammarPart3.save()
      // const newGrammarPart4 = GrammarPartModel(
      //   {
      //     name:"Present Perfect Continuous: Thì hiện tại hoàn thành tiếp diễn.",
      //      content: ` <div class="last-content">

      //      <p><span style="font-size:14px"><span style="color:#0099ff"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>I. ĐỊNH NGHĨA VỀ HIỆN TẠI HOÀN THÀNH TIẾP
      //                DIỄN</strong></span></span></span></p>
      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000"><strong>Thì hiện tại hoàn thành tiếp diễn</strong>&nbsp;(Present perfect
      //              continuous) là một thì trong tiếng Anh hiện đại. Được sử dụng để chỉ sự việc xảy ra trong quá khứ
      //              nhưng vẫn còn tiếp tục ở hiện tại và có thể vẫn còn tiếp diễn trong tương lai. Chúng ta sử dụng thì
      //              này để nói về sự việc đã kết thúc nhưng chúng ta vẫn còn thấy ảnh hưởng.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#0099ff"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>II. CẤU TRÚC VỀ THÌ HIỆN TẠI HOÀN THÀNH TIẾP
      //                DIỄN</strong></span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>1. Khẳng định:</strong></span></span></span>
      //      </p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000"><strong>- Cấu Trúc:</strong></span></span></span></p>

      //      <p style="text-align:center"><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">S + have/ has + been +
      //                V-ing</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000"><strong>- Trong đó: &nbsp; &nbsp;</strong> &nbsp;&nbsp;</span></span></span>
      //      </p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">S (subject): chủ ngữ</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">Have/ has: trợ động từ</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">Been: Phân từ II của “to be”</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">V-ing: Động từ thêm “-ing”</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Lưu ý</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">S = I/ We/ You/ They + have</span></span></span></li>
      //        <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">S = He/ She/ It + has</span></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">It <u><strong>has been raining</strong></u> for three days.</span><span
      //                  style="color:#008000"> (Trời mưa 3 ngày rồi.)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">They <u><strong>have been working</strong></u> for this company for 7
      //                  years.</span><span style="color:#008000"> (Họ làm việc cho công ty này 7 năm
      //                  rồi.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>2. Phủ định:</strong></span></span></span>
      //      </p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000"><strong>- Cấu trúc:</strong></span></span></span></p>

      //      <p style="text-align:center"><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">S + haven't/ hasn't + been +
      //                V-ing</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">=&gt; Câu phủ định ta chỉ cần thêm “not” ngay sau trợ động từ “have/
      //              has”.</span></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">- Lưu ý:</span></span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">haven't = have not</span></span></span></li>
      //        <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000">hasn't = has not</span></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">I <u><strong>haven't been studying</strong></u> English for 4 years.
      //                </span><span style="color:#008000">(Tôi không học tiếng Anh được 4 năm
      //                  rồi.)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">She <u><strong>hasn't been watching</strong></u> films since last year.
      //                </span><span style="color:#008000">(Cô ấy không xem phim từ năm ngoái.)</span></span></em></span>
      //        </li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>3. Câu hỏi:</strong></span></span></span></p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000"><strong>- Cấu Trúc</strong></span></span></span></p>

      //      <p style="text-align:center"><span style="font-size:14px"><span style="color:#66cc00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">Have/ Has + S + been + V-ing
      //                ?</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000"><strong>- Trả lời: &nbsp; </strong>&nbsp; &nbsp; &nbsp;
      //              &nbsp;&nbsp;</span></span><span
      //            style="color:#000000; font-family:arial,helvetica,sans-serif">&nbsp;&nbsp;</span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="color:#000000; font-family:arial,helvetica,sans-serif">Yes, I/ we/ you/ they +
      //                  have</span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="color:#000000; font-family:arial,helvetica,sans-serif">Yes, he/ she / it +
      //                  has.</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="color:#000000; font-family:arial,helvetica,sans-serif">No, I/ we/ you/ they +
      //                  haven't</span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="color:#000000; font-family:arial,helvetica,sans-serif">No, he/ she/ it +
      //                  hasn't</span></span></td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">=&gt; Câu hỏi ta chỉ cần đảo trợ động từ “have/has” lên trước chủ
      //              ngữ”.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000"><u><strong>Have</strong></u> you <u><strong>been standing</strong></u> in
      //                  the rain for more than 2 hours? </span><span style="color:#008000">(Bạn đứng dưới mưa hơn 2
      //                  tiếng đồng hồ rồi phải không?)</span></span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000"><span style="font-family:arial,helvetica,sans-serif"><span
      //                      style="color:#000000">Yes, I have./ No, I haven't.</span></span></span></span></em></span>
      //        </li>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000"><u><strong>Has</strong></u> he <u><strong>been typing</strong></u> the
      //                  report since this morning? </span><span style="color:#008000">(Anh ấy đánh máy bài báo cáo từ
      //                  sáng rồi rồi phải không?)</span><br>
      //                <span style="color:#000000"><span style="font-family:arial,helvetica,sans-serif"><span
      //                      style="color:#000000">Yes, he has./ No, he hasn't.</span></span></span></span></em></span>
      //        </li>
      //      </ul>

      //      <p><br>
      //        <span style="font-size:14px"><span style="color:#0099ff"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>III. CÁCH SỬ DỤNG CỦA THÌ HIỆN TẠI HOÀN THÀNH
      //                TIẾP DIỄN</strong></span></span></span>
      //      </p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">1. Dùng để diễn tả một hành động bắt đầu trong quá
      //                khứ diễn ra liên tục và kéo dài đến hiện tại (Nhấn mạnh tính “liên tục” của hành
      //                động)</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000"><u><strong>I have been typing</strong></u> this letter for 3 hours.
      //                </span><span style="color:#008000">(Tôi đã đánh máy bức thư này được 3 tiếng đồng hồ
      //                  rồi.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">=&gt; Ta hiểu là việc đánh máy đã bắt đầu cách đây 3 tiếng và liên tục diễn ra
      //              kéo dài cho tới bây giờ và vẫn chưa kết thúc.</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>2.&nbsp;Dùng để diễn tả hành động đã xảy ra,
      //                vừa mới kết thúc nhưng kết quả của hành động vẫn có thể nhìn thấy được ở hiện
      //                tại.</strong></span></span></span></p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">- Eg:&nbsp;</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="color:#000000"><em>I am very tired now because <u><strong>I have been working</strong></u>
      //                  hard for 8 hours. </em></span><span style="color:#008000"><em>(Bây giờ tôi rất mệt vì tôi đã làm
      //                  việc vất vả trong 8 tiếng đồng hồ.)</em></span></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">=&gt; Ta thấy việc “làm việc vất vả 8h đồng hồ” vừa mới kết thúc nhưng kết quả
      //              của nó thì vẫn có thể thấy được ở hiện tại (đang rất mệt.)</span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#0099ff"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>IV. DẤU HIỆU ĐỂ NHẬN BIẾT THÌ HIỆN TẠI HOÀN
      //                THÀNH TIẾP DIỄN</strong></span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">- Since + mốc thời
      //                gian</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">She <u><strong>has been working</strong></u> <u>since</u> the early
      //                  morning. </span><span style="color:#008000">(Cô ấy làm việc từ sáng
      //                  sớm.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">- For + khoảng thời
      //                gian</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">They <u><strong>have been listening</strong></u> to the radio <u>for</u> 3
      //                  hours.</span><span style="color:#008000"> (Họ nghe đài được 3 tiếng đồng hồ
      //                  rồi.)</span></span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#ffa500"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">- All + thời gian (all the morning, all the
      //                afternoon, all day, …)</span></strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#000000">- Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="font-family:arial,helvetica,sans-serif"><span
      //                  style="color:#000000">They <u><strong>have been working</strong></u> in the field <u>all</u> the
      //                  morning. </span><span style="color:#008000">(Họ làm việc ngoài đồng cả buổi
      //                  sáng.)</span></span></em></span></li>
      //      </ul>

      //      <p style="text-align:center"><span style="font-size:14px"><span
      //            style="color:#000000"><strong>-----</strong></span></span></p>

          
      //    </div>`
      //   }
      // )
      // await newGrammarPart4.save()
      // const newGrammarPart5 = GrammarPartModel(
      //   {
      //     name:"Danh động từ (Gerund) và Động từ nguyên mẫu trong tiếng Anh",
      //      content: ` <div class="last-content">
      //      <p><br><span style="font-size:14px"><span style="color:#0099ff"><strong>I. TỔNG QUAN VỀ DANH ĐỘNG TỪ VÀ ĐỘNG
      //              TỪ NGUYÊN MẪU</strong></span></span></p>
      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>Gerund</strong> ( Danh động từ ) và
      //            <strong>Infinitives</strong> ( Động từ nguyên mẫu ) là hai dạng của động từ có thể được sử dụng để
      //            thay thế cho danh từ trong một câu, thường để chỉ các hành động hơn là chỉ người hay đối
      //            tượng.&nbsp;</span></span></p>
      //      <p><span style="font-size:14px"><span style="color:#0099ff"><strong>II. DANH ĐỘNG TỪ | GERUND (-ING
      //              FORM)</strong></span></span></p>
      //      <p><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>1.&nbsp;Khái
      //                niệm</strong></span></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>Gerund</strong>&nbsp;( danh động từ ) là
      //            danh từ được hình thành bằng cách thêm đuôi ing vào động từ.</span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg: coming, building,
      //                teaching…</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Phủ định của danh động từ được hình
      //              thành bằng cách thêm not vào trước V-ing.</strong></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg: not making, not
      //                opening…</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Cũng có thể thêm tính từ sở hữu vào
      //              trước danh động từ để nói rõ chủ thể thực hiện hành động.</strong></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg: my turning on the air
      //                conditioner.</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#66cc00"><strong>2. Cách sử dụng danh động từ ( Gerund
      //              )</strong></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000">- Dùng làm chủ ngữ trong
      //              câu.</span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg: Reading helps you improve your
      //                vocabulary.</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000">- Dùng làm bổ ngữ cho động
      //              từ</span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg: Her favorite hobby is collecting
      //                stamps. </span><span style="color:#008000">(Sở thích của cô ấy là sưu tầm tem.)</span></em></span>
      //        </li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Dùng làm tân ngữ của động
      //              từ</strong></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg: He loves surfing the Internet.
      //              </span><span style="color:#008000">(Anh ấy thích lướt Internet.)</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Dùng sau giới từ (on, in, by, at…) và
      //              liên từ (after, before, when, while…)</strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Eg:&nbsp;</span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>Young people are very much interested
      //                <strong><u>in</u></strong> travelling.</em></span></span></li>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>He cleaned his room
      //                <u><strong>before</strong></u> going out with his friends. </em></span><span
      //              style="color:#008000"><em>(Anh ấy đã dọn dẹp phòng mình trước khi đi chơi với bạn
      //                bè.)</em></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Dùng sau một số động từ và cụm động từ
      //              sau</strong>: enjoy, avoid, admit, appreciate, mind, finish, practice, advise, suggest, recommend,
      //            postpone, delay, consider, hate, like, love, deny, detest, keep, miss, imagine, mention, risk, recall,
      //            risk, quiet, waste (time), forbid, permit, resent, escape, cant' help, can't bear / can't stand, be
      //            used to, get used to, look forward to, it's no use / it's no good, be busy, be worth…</span></span>
      //      </p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Eg: </span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">They enjoyed working on the boat.
      //              </span><span style="color:#008000">(Họ rất thích làm việc trên thuyền.)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">The man admitted stealing the company's
      //                money. </span><span style="color:#008000">(Người đàn ông ấy thừa nhận ăn cắp tiền của công
      //                ty.)</span></em></span></li>
      //      </ul>

         

      //      <p><span style="font-size:14px"><span style="color:#0099ff"><strong>III. INFINITIVES - Động từ nguyên
      //              mẫu</strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#66cc00"><strong>1. Khái niệm</strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Infinitives là hình thức động từ nguyên
      //            mẫu.</span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Có 2 loại động từ nguyên
      //              mẫu:</strong></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Động từ nguyên mẫu có "to" (to
      //                infinitives)&nbsp;</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Động từ nguyên dạng không to (bare
      //                infinitives).</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000">- Để thuận tiện, người Anh 'ngầm' quy ước rằng
      //            khi nói 'động từ nguyên mẫu' (infinitives) có nghĩa là 'động từ nguyên mẫu có to' còn khi muốn nói
      //            'động từ nguyên mẫu không to' thì người ta phải nói đầy đủ 'infinitives without to'.</span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Eg:</span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Infinitive: to learn, to watch, to
      //                play…</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Bare infinitive: learn, watch,
      //                play…</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Phủ định của động từ nguyên mẫu được
      //              hình thành bằng cách thêm "not" vào trước "to V" hoặc "V".</strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Eg:&nbsp;</span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Infinitive: not to learn, not to watch,
      //                not to play…</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Bare infinitive: not learn, not watch,
      //                not play…</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#66cc00"><strong>2. Cách sử dụng INFINITIVES - Động từ
      //              nguyên mẫu</strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ff8c00"><strong>a) Động từ nguyên mẫu có
      //              to:</strong></span></span></p>

          

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Dùng làm chủ ngữ trong
      //              câu:</strong></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>&nbsp;Eg: To learn English well is
      //                important to your future job.</em></span><span style="color:#008000"><em> (Học tiếng Anh rất tốt
      //                cho công việc tương lai của bạn)</em></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Dùng làm bổ ngữ cho động
      //              từ:</strong></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg: The most important thing for you now
      //                is to learn hard. </span><span style="color:#008000">(Điều quan trọng nhất đối với bạn là học tập
      //                chăm chỉ.)</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Dùng làm tân ngữ của động từ, tính
      //              từ:</strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Eg: </span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">He wants to learn English. </span><span
      //                style="color:#008000">(Anh ấy muốn học tiếng Anh.)</span></em></span></li>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>I am pleased to hear that you have passed
      //                your exam.</em></span><span style="color:#008000"><em> (Tôi mừng khi biết rằng bạn đã vượt qua kỳ
      //                thi đó)</em></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Dùng sau hình thức bị động của động từ
      //              số 1:</strong></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>Eg: &nbsp;We were made to work overtime
      //                yesterday. </em></span><span style="color:#008000"><em>(Chúng tôi đã làm để làm thêm giờ ngày hôm
      //                qua.)</em></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Dùng sau động từ số 1 và tân
      //              ngữ:</strong></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg: The doctor advised us to take a
      //                holiday for a rest.</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Dùng sau tân ngữ là các từ để hỏi (trừ
      //              why):</strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><em>Eg: We completely didn't know what to do at
      //              that time. </em></span><span style="color:#008000"><em>(Chúng tôi hoàn toàn không biết phải làm gì
      //              vào thời điểm đó.)</em></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">- <strong>Dùng sau một số động từ sau</strong>:
      //            Agree , aim, arrange, attempt, care, choose, appear, afford, ask, demand, expect, hesitate, intend,
      //            invite, want, wish, hope, promise, decide, start, learn, fail, plan, manage, pretend, remind,
      //            persuade, encourage, force, order, urge, seem, tend, threaten, wait, intend, mean, happen, manage,
      //            …</span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Eg:&nbsp;</span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>She agreed to speak before the
      //                game.</em></span></span></li>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>He appeared to lose his
      //                weight.&nbsp;</em></span></span></li>
      //      </ul>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //        <tbody>
      //          <tr>
      //            <td>
      //              <p><span style="font-size:14px"><span style="color:#ff8c00"><strong>CHÚ Ý:</strong></span></span>
      //              </p>

      //              <p><span style="font-size:14px"><span style="color:#000000">Cả gerund và infinitive đều có thể được
      //                    dùng làm chủ ngữ, bổ ngữ và tân ngữ của động từ. Tuy nhiên, khi đóng vai trò làm chủ ngữ và bổ
      //                    ngữ của động từ, gerund thường được sử dụng phổ biến hơn (đặc biệt là trong văn nói),
      //                    infinitive chỉ được sử dụng khi người nói muốn nhấn mạnh vào mục đích của hành động. (90% động
      //                    từ làm chủ ngữ và bổ ngữ cho động từ được chia ở dạng gerund).</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">Eg:</span></span></p>

      //              <ul>
      //                <li><span style="font-size:14px"><em><span style="color:#000000">Learning is important. à phổ
      //                        biến</span></em></span></li>
      //                <li><span style="font-size:14px"><em><span style="color:#000000">To learn is important. à ít phổ
      //                        biến</span></em></span></li>
      //                <li><span style="font-size:14px"><em><span style="color:#000000">The most important thing is
      //                        learning. à phổ biến</span></em></span></li>
      //                <li><span style="font-size:14px"><em><span style="color:#000000">The most important thing is to
      //                        learn. à ít phổ biến</span></em></span></li>
      //              </ul>

      //              <p><span style="font-size:14px"><span style="color:#000000">- Việc chia động từ ở gerund hay
      //                    infinitive khi động từ đóng vai trò làm tân ngữ phụ thuộc vào động từ chính.</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">Eg: &nbsp;</span></span></p>

      //              <ul>
      //                <li><span style="font-size:14px"><span style="color:#000000">We hate cooking. à hate +
      //                      Ving</span></span></li>
      //                <li><span style="font-size:14px"><span style="color:#000000">We want to eat out. à want + to
      //                      V</span></span></li>
      //              </ul>
      //            </td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><span style="font-size:14px"><strong><span style="color:#ff8c00">b) Động từ nguyên mẫu không
      //              to:</span></strong></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Dùng sau các động từ khuyết
      //              thiếu:</strong></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>Eg: I can speak Japanese.
      //              </em></span><span style="color:#008000"><em>(Tôi có thể nói tiếng Nhật.)</em></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Chú ý: khuyết thiếu ought to
      //              V.</strong></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>Eg: We ought to work hard at this time of
      //                the year.</em></span><br>
      //            <span style="color:#008000"><em>Chúng ta phải làm việc chăm chỉ vào thời điểm này trong
      //                năm.</em></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Dùng trong thể mệnh lệnh
      //              thức:</strong></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>Eg: Look at the picture and answer the
      //                questions.</em></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>- Dùng trong một số cấu trúc: would
      //              rather, had better+ V và have sb, let sb, make sb + V.</strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Eg:&nbsp;</span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>They made him repeat the whole
      //                story.</em></span></span></li>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>We had the mechanic service our car last
      //                week.</em></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000">CHÚ Ý:</span></strong></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">+ Help có thể dùng cả động từ nguyên dạng có to
      //            và động từ nguyên dạng không to ở sau.</span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Eg: </span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">They helped us (to) clean our
      //                classroom.</span><br>
      //              <span style="color:#008000"><em>Họ đã giúp chúng tôi (để) dọn dẹp lớp học.</em></span></em></span>
      //        </li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000">+ Một số động từ đặc biệt (need, dare) có thể
      //            được dùng cả như động từ khuyết thiếu lẫn động từ thường. Khi được dùng như động từ khuyết thiếu, động
      //            từ đi sau sẽ để ở nguyên mẫu không to; khi được dùng như động từ thường, động từ đi sau sẽ chia ở
      //            nguyên mẫu có to.<br>
      //            Eg:&nbsp;</span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">We needn't book in
      //                advance</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">We don't need to book in
      //                advance.</span></em></span></li>
      //      </ul>

          
      //      <p><br>
      //        <span style="font-size:14px"><span style="color:#0099ff"><strong>III. KHI NÀO DÙNG GERUNDS VÀ KHI NÀO DÙNG
      //              INFINITIVES?</strong></span></span>
      //      </p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Có một số động từ có thể theo sau bởi cả gerunds
      //            lẫn infinitives. Trong một số trường hợp, việc động từ thứ 2 chia ở dạng V-ing hay to V không làm thay
      //            đổi hoặc chỉ thay đổi không đáng kể nghĩa của động từ chính; trong những trường hợp khác, việc dùng
      //            V-ing hay to V có thể làm thay đổi nghĩa của động từ chính.</span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#66cc00"><u><strong>Không làm thay đổi hoặc thay đổi
      //                không đáng kể nghĩa của động từ chính:</strong></u></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Các động từ start, begin, continue, love, like,
      //            prefer có thể sử dụng cả V-ing lẫn to V theo sau.</span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Eg:&nbsp;</span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">I love reading books.</span></em></span>
      //        </li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">I love to go out with my
      //                friends.</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000">- Chú ý: Ta dùng like/love/prefer + V-ing hoặc
      //            like/love/prefer + to V nhưng would like/would love/would prefer + to V.<br>
      //            - Chú ý: Ta có thể nói She began laughing/to laugh. They are beginning to shout nhưng thường không nói
      //            They are beginning shouting.</span></span></p>

      //      <p><span style="font-size:14px"><strong><u><span style="color:#66cc00">&nbsp;Làm thay đổi nghĩa của động từ
      //                chính:</span></u></strong></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">+ <strong>remember / forget + V-ing</strong>:
      //            nhớ / quên việc đã xảy ra rồi (trong quá khứ)<br>
      //            + <strong>remember / forget + to V</strong>: nhớ / quên việc chưa, sắp xảy ra (trong tương
      //            lai)</span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Eg:&nbsp;</span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Remeber to turn off the light before
      //                leaving home.</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">I remember meeting you
      //                before.</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000">+ <strong>stop + V-ing:</strong> dừng việc đang
      //            làm lại<br>
      //            + <strong>stop + to V</strong>: dừng lại để chuyển sang việc khác</span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Eg:</span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>We stopped talking when the teacher came
      //                in.</em></span></span></li>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>On the way home, I stopped at the post
      //                office to buy a newspaper.</em></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000">+ <strong>try + V-ing</strong>: thử làm gì<br>
      //            + <strong>try + to V:</strong> cố gắng làm gì</span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Eg:</span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">You can try mixing these two ingredients
      //                together and see what will happen</span></em></span></li>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>You should try to improve your listening
      //                skill.</em></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000">+ <strong>regret + V-ing</strong>: hối tiếc rằng
      //            đã làm gì<br>
      //            + <strong>regret + to V</strong>: tiếc rằng sắp phải làm gì (thông báo tin xấu)<br>
      //            Eg:&nbsp;</span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">I regret being rude to him
      //                yesterday.</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">I regret to inform you that your
      //                application has been denied.</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000">+ <strong>need + V-ing = need + to be
      //              P2</strong>: cần được (bị động)<br>
      //            +<strong> need + to V</strong>: cần (chủ động)<br>
      //            Eg: &nbsp;</span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">I need to wash my car.</span></em></span>
      //        </li>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>My car is very dirty. It needs
      //                washing.</em></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000">+ <strong>refuse + V-ing</strong>: phủ nhận là
      //            đã làm gì (hành động đã xảy ra rồi)<br>
      //            + <strong>refuse + to V</strong>: từ chối không muốn làm gì (hành động sẽ không xảy ra)</span></span>
      //      </p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Eg:&nbsp;</span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">He refused going out with her last
      //                night.</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">He refused to lend me some
      //                money.</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000">+ <strong>go on + V-ing</strong>: tiếp tục việc
      //            đang làm<br>
      //            + <strong>go on + to V</strong>: tiếp tục một việc mới sau khi hoàn thành việc đang làm</span></span>
      //      </p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Eg: </span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">After finishing her BA, she went on to
      //                get a master's degree.</span></em></span></li>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>She went on watching
      //                TV</em></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000">+ <strong>mean + V-ing</strong>: có nghĩa là, có
      //            liên quan đến<br>
      //            + <strong>mean + to V</strong>: có chủ ý, có kế hoạch làm gì<br>
      //            Eg: </span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Working harder means getting more
      //                money.</span></em></span></li>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>He meant to move the
      //                Newcastle</em></span></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000">+ <strong>Dùng sau các động từ chỉ tri giác và
      //              tân ngữ</strong>: hear, sound, smell, taste, feel, watch, notice, see, listen, find .. + O + V-ing
      //            để chỉ khoảnh khắc hành động đang diễn ra.<br>
      //            + <strong>Dùng sau các động từ chỉ tri giác và tân ngữ</strong>: hear, sound, smell, taste, feel,
      //            watch, notice, see, listen, find .. + O + V để chỉ sự hoàn tất của hành động - nghe hoặc thấy toàn bộ
      //            sự việc diễn ra<br>
      //            Eg:</span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>When I entered the room, I found him
      //                reading a book</em></span></span></li>
      //        <li><span style="font-size:14px"><span style="color:#000000"><em>I saw her go with a strange man
      //                yesterday.</em></span></span></li>
      //      </ul>

      //      <p style="text-align:center"><span style="font-size:14px"><span
      //            style="color:#000000"><strong>-----</strong></span></span></p>

         
      //    </div>`
      //   }
      // )
      // await newGrammarPart5.save()
      // const newGrammarPart6 = GrammarPartModel(
      //   {
      //     name:"Modal verbs: Động từ khiếm khuyết",
      //     content: `<div class="last-content">


      //     <p><span style="font-size:14px"><span style="color:#0099ff"><strong>I. ĐỊNH NGHĨA VỀ ĐỘNG TỪ KHIẾM KHUYẾT (
      //             MODAL VERBS )</strong></span></span></p>

      //     <p><span style="font-size:14px"><span style="color:#000000">- <strong>Động từ khiếm khuyết</strong>&nbsp;là
      //           loại động từ đặc biệt chỉ đi kèm và thực hiện chức năng bổ trợ cho động từ chính trong câu chứ không
      //           đứng một mình như một động từ chính trong câu.</span></span></p>

      //     <p><span style="font-size:14px"><strong><span style="color:#000000">- Các động từ khiếm khuyết trong tiếng
      //             Anh:</span></strong></span></p>

      //     <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //       <tbody>
      //         <tr>
      //           <td style="text-align:center"><span style="font-size:14px"><span
      //                 style="color:#000000">Can</span></span></td>
      //           <td style="text-align:center"><span style="font-size:14px"><span
      //                 style="color:#000000">Could</span></span></td>
      //           <td style="text-align:center"><span style="font-size:14px"><span
      //                 style="color:#000000">May</span></span></td>
      //           <td style="text-align:center"><span style="font-size:14px"><span
      //                 style="color:#000000">Might</span></span></td>
      //           <td style="text-align:center"><span style="font-size:14px"><span
      //                 style="color:#000000">Must</span></span></td>
      //         </tr>
      //         <tr>
      //           <td style="text-align:center"><span style="font-size:14px"><span style="color:#000000">Ought
      //                 to</span></span></td>
      //           <td style="text-align:center"><span style="font-size:14px"><span
      //                 style="color:#000000">Should&nbsp;</span></span></td>
      //           <td style="text-align:center"><span style="font-size:14px"><span
      //                 style="color:#000000">Shall</span></span></td>
      //           <td style="text-align:center"><span style="font-size:14px"><span
      //                 style="color:#000000">Would</span></span></td>
      //           <td style="text-align:center"><span style="font-size:14px"><span
      //                 style="color:#000000">will</span></span></td>
      //         </tr>
      //       </tbody>
      //     </table>

      //     <p><span style="font-size:14px"><span style="color:#0099ff"><strong>II. CẤU TẠO CHUNG CỦA ĐỘNG TỪ KHIẾM
      //             KHUYẾT</strong></span></span></p>

      //     <p><span style="font-size:14px"><span style="color:#66cc00"><strong>1. Cấu tạo chung</strong></span></span>
      //     </p>

      //     <p style="text-align:center"><span style="font-size:14px"><strong><span style="color:#000000">S + Modal
      //             Verbs + V(bare-infinitive)</span></strong></span></p>

      //     <ul>
      //       <li><span style="font-size:14px"><span style="color:#000000">(bare-infinitive: động từ nguyên thể không
      //             “to”)</span></span></li>
      //     </ul>

      //     <p><span style="font-size:14px"><span style="color:#000000">Eg:&nbsp;</span></span></p>

      //     <ul>
      //       <li><span style="font-size:14px"><em><span style="color:#000000">They <u><strong>can</strong></u>
      //               <u><strong>speak</strong></u> French and English. </span><span style="color:#008000">(Họ có thể
      //               nói tiếng Pháp và tiếng Anh.)</span></em></span></li>
      //     </ul>

      //     <p><span style="font-size:14px"><span style="color:#66cc00"><strong>2. Không biến đổi dạng thứ trong các
      //             ngôi.</strong></span></span></p>

      //     <p><span style="font-size:14px"><span style="color:#000000">Eg:&nbsp;</span></span></p>

      //     <ul>
      //       <li><span style="font-size:14px"><em><span style="color:#000000">He <u><strong>can</strong></u> use our
      //               phone. (He <s>cans</s> use your phone)</span><br>
      //             <span style="color:#008000">Anh ấy có thể sử dụng điện thoại của chúng tôi.&nbsp;</span></em></span>
      //       </li>
      //     </ul>

      //     <p><span style="font-size:14px"><span style="color:#66cc00"><strong>3. Tồn tại ở thì Hiện tại và thì Quá khứ
      //             đơn.</strong></span></span></p>

      //     <p><span style="font-size:14px"><span style="color:#000000">Eg:</span></span></p>

      //     <ul>
      //       <li><span style="font-size:14px"><em><span style="color:#000000">She <u><strong>can</strong></u> cook
      //               meals. </span><span style="color:#008000">(Cô ấy có thể nấu ăn.)</span></em></span></li>
      //       <li><span style="font-size:14px"><em><span style="color:#000000">She <u><strong>could</strong></u> cook
      //               meals when she was twelve. </span><span style="color:#008000">(Cô có thể nấu các bữa ăn khi cô
      //               mười hai tuổi.)</span></em></span></li>
      //     </ul>

      //     <p><span style="font-size:14px"><span style="color:#0099ff"><strong>III. CÁC ĐỘNG TỪ KHIẾM KHUYẾT THƯỜNG
      //             GẶP</strong></span></span></p>

      //     <p><span style="font-size:14px"><strong><span style="color:#66cc00">1. CAN</span></strong></span></p>

      //     <p><span style="font-size:14px"><span style="color:#000000">- CAN chỉ có 2 thì: Hiện tại và Quá khứ đơn.
      //           Những hình thức khác ta dùng động từ tương đương “be able to”. CAN cũng có thể được dùng như một trợ
      //           động từ để hình thành một số cách nói riêng.</span></span></p>

      //     <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //       <tbody>
      //         <tr>
      //           <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Cách sử
      //                   dụng</strong></span></span></td>
      //           <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Ví
      //                   Dụ</strong></span></span></td>
      //         </tr>
      //         <tr>
      //           <td><span style="font-size:14px"><span style="color:#000000">- <strong>CAN</strong> và
      //                 <strong>COULD</strong> có nghĩa là “có thể”, diễn tả một khả năng (ability).</span></span></td>
      //           <td>
      //             <ul>
      //               <li><span style="font-size:14px"><em><span style="color:#000000"><u><strong>Can</strong></u> you
      //                       swim? </span><br>
      //                     <span style="color:#008000">( Bạn biết bơi không? )</span></em></span></li>
      //               <li><span style="font-size:14px"><em><span style="color:#000000">She <u><strong>could</strong></u>
      //                       ride a bicycle when she was five years old. </span><br>
      //                     <span style="color:#008000">(Cô ấy có thể đi xe đạp khi cô ấy được 5
      //                       tuổi.)</span></em></span></li>
      //             </ul>
      //           </td>
      //         </tr>
      //         <tr>
      //           <td><span style="font-size:14px"><span style="color:#000000">- Trong văn nói (colloquial speech),
      //                 <strong>CAN</strong> được dùng thay cho MAY để diễn tả một sự cho phép (permission) và thể phủ
      //                 định <strong>CANNOT</strong> được dùng để diễn tả một sự cấm đoán (prohibition).</span></span>
      //           </td>
      //           <td>
      //             <ul>
      //               <li><span style="font-size:14px"><em><span style="color:#000000">In London buses you
      //                       <u><strong>can</strong></u> smoke on the upper deck, but you <u><strong>can't</strong></u>
      //                       smoke downstairs.</span><br>
      //                     <span style="color:#008000">(Ở London,trên xe buýt bạn có thể hút thuốc ở tầng thượng, nhưng
      //                       bạn không thể hút thuốc ở tầng dưới.)</span></em></span></li>
      //             </ul>
      //           </td>
      //         </tr>
      //         <tr>
      //           <td><span style="font-size:14px"><span style="color:#000000">- <strong>CAN</strong> cũng diễn tả một
      //                 điều có thể xảy đến (possibility). Trong câu hỏi và câu cảm thán CAN có nghĩa là 'Is it
      //                 possible…?'</span></span></td>
      //           <td>
      //             <ul>
      //               <li><span style="font-size:14px"><em><strong><u><span
      //                           style="color:#000000">Can</span></u></strong><span style="color:#000000"> it be true?
      //                     </span><br>
      //                     <span style="color:#008000">(Đó có phải là sự thật không?)</span></em></span></li>
      //             </ul>
      //           </td>
      //         </tr>
      //         <tr>
      //           <td><span style="font-size:14px"><span style="color:#000000">- <strong>CANNOT</strong> được dùng để
      //                 diễn tả một điều khó có thể xảy ra (virtual impossibility)</span></span></td>
      //           <td>
      //             <ul>
      //               <li><span style="font-size:14px"><em><span style="color:#000000">He can't have missed the way. I
      //                       explained the route carefully. </span><br>
      //                     <span style="color:#008000">(Anh ấy không thể bỏ lỡ cơ hội. Tôi đã giải thích tuyến đường
      //                       cẩn thận.)</span></em></span></li>
      //             </ul>
      //           </td>
      //         </tr>
      //         <tr>
      //           <td><span style="font-size:14px"><span style="color:#000000">- Khi dùng với động từ tri giác (verbs of
      //                 perception) <strong>CAN</strong> cho ý nghĩa tương đương với thì Tiếp diễn (Continuous
      //                 Tense).</span></span></td>
      //           <td>
      //             <ul>
      //               <li><span style="font-size:14px"><em><span style="color:#000000">Listen! I think I
      //                       <u><strong>can</strong></u> hear the sound of the sea.<br>
      //                       (không dùng I am hearing)</span><br>
      //                     <span style="color:#008000">Nghe! Tôi nghĩ rằng tôi có thể nghe thấy âm thanh của
      //                       biển.</span></em></span></li>
      //             </ul>
      //           </td>
      //         </tr>
      //       </tbody>
      //     </table>

      //     <p><span style="font-size:14px"><span style="color:#66cc00"><strong>2. COULD</strong></span></span></p>

      //     <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //       <tbody>
      //         <tr>
      //           <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Cách Sử
      //                   Dụng</strong></span></span></td>
      //           <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Ví
      //                   Dụ</strong></span></span></td>
      //         </tr>
      //         <tr>
      //           <td><span style="font-size:14px"><span style="color:#000000">- <strong>COULD</strong> là thì quá khứ
      //                 đơn của CAN.</span></span></td>
      //           <td>
      //             <ul>
      //               <li><span style="font-size:14px"><em><span style="color:#000000">She <u><strong>could</strong></u>
      //                       swim when she was five. </span><br>
      //                     <span style="color:#008000">Cô ấy có thể bơi khi cô ấy năm tuổi.</span></em></span></li>
      //             </ul>
      //           </td>
      //         </tr>
      //         <tr>
      //           <td><span style="font-size:14px"><span style="color:#000000">- <strong>COULD </strong>còn được dùng
      //                 trong câu điều kiện.</span></span></td>
      //           <td>
      //             <ul>
      //               <li><span style="font-size:14px"><em><span style="color:#000000">If you tried, you
      //                       <u><strong>could</strong></u> do that work.&nbsp;</span><br>
      //                     <span style="color:#008000">Nếu bạn cố gắng, bạn có thể làm được việc đó</span></em></span>
      //               </li>
      //             </ul>
      //           </td>
      //         </tr>
      //         <tr>
      //           <td><span style="font-size:14px"><span style="color:#000000">- Trong cách nói thân mật, <strong>COULD
      //                 </strong>được xem như nhiều tính chất lịch sự hơn <strong>CAN</strong>.</span></span></td>
      //           <td>
      //             <ul>
      //               <li><span style="font-size:14px"><em><span style="color:#000000"><u><strong>Can</strong></u> you
      //                       change a 20-dollar note for me, please? </span><br>
      //                     <span style="color:#008000">Bạn làm ơn đổi cho tôi 20 đô la?</span></em></span></li>
      //               <li><span style="font-size:14px"><em><span style="color:#000000"><u><strong>Could</strong></u> you
      //                       tell me the right time, please?</span></em></span></li>
      //             </ul>
      //           </td>
      //         </tr>
      //         <tr>
      //           <td><span style="font-size:14px"><span style="color:#000000">- <strong>COULD</strong> được dùng để
      //                 diển tả một sự ngờ vực hay một lời phản kháng nhẹ nhàng.</span></span></td>
      //           <td>&nbsp;
      //             <ul>
      //               <li><span style="font-size:14px"><span style="color:#000000"><em>His story
      //                       <strong><u>could</u></strong> be true, but I hardly think it is. </em></span><br>
      //                   <span style="color:#008000"><em>(Câu chuyện của anh ta có thể đúng, nhưng tôi hầu như không
      //                       nghĩ là như vậy.)</em></span></span></li>
      //             </ul>
      //           </td>
      //         </tr>
      //         <tr>
      //           <td>
      //             <p><span style="font-size:14px"><span style="color:#000000">- <strong>COULD - WAS/WERE ABLE
      //                     TO</strong>:<br>
      //                   + Nếu hành động diễn tả một khả năng, một kiến thức, <strong>COULD</strong> được dùng thường
      //                   hơn WAS/WERE ABLE TO.</span></span></p>

      //             <p><span style="font-size:14px"><span style="color:#000000">+&nbsp;Nếu câu nói hàm ý một sự thành
      //                   công trong việc thực hiện hành động (succeeded in doing) thì <strong>WAS/WERE ABLE TO</strong>
      //                   được sử dụng chứ không phải <strong>COULD</strong>.</span></span></p>
      //           </td>
      //           <td>
      //             <ul>
      //               <li><span style="font-size:14px"><em><span style="color:#000000">The door was locked, and I
      //                       <u><strong>couldn't </strong></u>open it. </span><br>
      //                     <span style="color:#008000">Cửa đã bị khóa, và tôi không thể mở nó.</span></em></span></li>
      //               <li><span style="font-size:14px"><em><span style="color:#000000">I finished my work early and so
      //                       <u><strong>was able to</strong></u> go to the pub with my friends.&nbsp; &nbsp; &nbsp;
      //                       &nbsp; &nbsp; &nbsp;&nbsp;</span><br>
      //                     <span style="color:#008000">Tôi đã hoàn thành công việc của tôi sớm và vì vậy đã có thể đi
      //                       đến quán rượu với bạn bè của tôi.</span></em></span></li>
      //             </ul>
      //           </td>
      //         </tr>
      //       </tbody>
      //     </table>

      //     <div>&nbsp;</div>


      //     <div><span style="font-size:14px"><span style="color:#66cc00"><strong>3. MAY - MIGHT</strong></span></span>
      //     </div>

      //     <div>&nbsp;</div>

      //     <div>
      //       <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //         <tbody>
      //           <tr>
      //             <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Cách
      //                     Sử Dụng</strong></span></span></td>
      //             <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Ví
      //                     Dụ</strong></span></span></td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- MAY và dạng quá khứ MIGHT diễn tả sự
      //                   xin phép, cho phép (permission).</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000"><u><strong>May</strong></u> I
      //                         take this book? - Yes, you may. </span><br>
      //                       <span style="color:#008000">Tôi có thể lấy cuốn sách này không? - Vâng! Bạn lấy
      //                         đi</span></em></span></li>
      //                 <li><span style="font-size:14px"><span style="color:#000000"><em>She asked if she
      //                         <u><strong>might</strong></u> go to the party.</em></span></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- <strong>MAY/MIGHT</strong> dùng diễn
      //                   tả một khả năng có thể xảy ra hay không thể xảy ra.</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000">It <u><strong>may</strong></u>
      //                         rain. </span><br>
      //                       <span style="color:#008000">(Có thể trời mưa)</span></em></span></li>
      //                 <li><span style="font-size:14px"><span style="color:#000000"><em>He admitted that the news
      //                         <u><strong>might</strong></u> be true.</em></span></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- Dùng trong câu cảm thán,
      //                   <strong>MAY/MIGHT</strong> diễn tả một lời cầu chúc.</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000"><u><strong>May</strong></u> all
      //                         your dreams come true!</span><br>
      //                       <span style="color:#008000">Có thể tất cả những giấc mơ của bạn trở thành sự
      //                         thật!</span></em></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- <strong>MAY/MIGHT</strong> dùng trong
      //                   mệnh đề theo sau các động từ hope (hy vọng) và trust (tin tưởng).</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000">I trust (hope) that you
      //                         <u><strong>may</strong></u> find this information useful</span><br>
      //                       <span style="color:#008000">Tôi hi vọng bạn sẽ thấy những thông tin này hữu
      //                         ích</span></em></span></li>
      //                 <li><span style="font-size:14px"><span style="color:#000000"><em>He trust (hoped) that we
      //                         <u><strong>might</strong></u> find the plan to our satisfaction.</em></span></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- <strong>MAY/MIGHT</strong> dùng thay
      //                   cho một mệnh đề trạng ngữ chỉ sự nhượng bộ (adverb clauses of concession).</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000">He <u><strong>may</strong></u>
      //                         be poor, but he is honest. (Though he is poor…)</span><br>
      //                       <span style="color:#008000">Anh ấy có thể là người nghèo, nhưng anh ấy là người trung
      //                         thực. (Mặc dù anh ta nghèo ...)</span></em></span></li>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000">Try as he
      //                         <u><strong>might</strong></u>, he could not pass the examination. (Though he tried
      //                         hard…)</span><br>
      //                       <span style="color:#008000">Cố gắng hết sức có thể, anh ta không thể vượt qua kỳ kiểm tra.
      //                         (Mặc dù anh ấy đã cố gắng ...)</span></em></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- <strong>MAY/MIGHT</strong> thường
      //                   được dùng trong mệnh đề trạng ngữ chỉ mục đích (adverb clauses of purpose). Trong trường hợp
      //                   này người ta cũng thường dùng CANCOULD để thay cho MAY/MIGHT</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000">She was studying so /that she
      //                         <u><strong>might</strong></u> read English books. </span><br>
      //                       <span style="color:#008000">( Cô ấy đang học để có thể đọc sách tiếng Anh.
      //                         )&nbsp;</span></em></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //           <tr>
      //             <td><br>
      //               <span style="font-size:14px"><span style="color:#000000">- <strong>MIGHT</strong> (không dùng MAY)
      //                   đôi khi được dùng trong câu để diễn tả một lời trách mắng có tính hờn dỗi (petulant
      //                   reproach).</span></span>
      //             </td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000">You
      //                         <u><strong>might</strong></u> listen when I am talking to you.</span><span
      //                         style="color:#008000">(Làm ơn ráng mà lắng nghe tôi nói)</span></em></span></li>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000">You
      //                         <u><strong>might</strong></u> try to be a little more helpful.</span><br>
      //                       <span style="color:#008000">(Làm ơn ráng mà tỏ ra có ích một chút)</span></em></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //         </tbody>
      //       </table>

      //       <p><span style="font-size:14px"><span style="color:#66cc00"><strong>4. MUST</strong></span></span></p>

      //       <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //         <tbody>
      //           <tr>
      //             <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Cách
      //                     Sử Dụng</strong></span></span></td>
      //             <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Ví
      //                     Dụ</strong></span></span></td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- <strong>MUST</strong> có nghĩa là
      //                   “phải” diễn tả một mệnh lệnh hay một sự bắt buộc.</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><span style="color:#000000"><em>You
      //                         <u><strong>must</strong></u> drive on the left in London.</em></span><span
      //                       style="color:#008000"><em>(Bạn phải lái xe ở bên trái tại London.)</em></span></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- <u><strong>MUST</strong></u> dùng
      //                   trong câu suy luận logic.</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><span style="color:#000000"><em>Are you going home at midnight?
      //                         You <u><strong>must</strong></u> be mad!&nbsp;</em></span></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- <u><strong>MUST NOT
      //                       (MUSTN'T)</strong></u> diễn tả một lệnh cấm.</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><span style="color:#000000"><em>You
      //                         <u><strong>mustn't</strong></u> walk on the grass. </em></span><br>
      //                     <span style="color:#008000"><em>(Bạn không được đi bộ trên cỏ.)</em></span></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- Khi muốn diễn tả thể phủ định của
      //                   <u><strong>MUST</strong></u> với ý nghĩa “không cần thiết” người ta sử dụng NEED NOT
      //                   (NEEDN'T).</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><span style="color:#000000"><em><u><strong>Must</strong></u> I
      //                         do it now? - No, you needn't. Tomorrow will be soon enough.</em></span><br>
      //                     <span style="color:#008000"><em>(Tôi phải làm ngay bây giờ chứ? Không ngày mai vẫn còn sớm
      //                         chán nên không cần phải làm bây giờ đâu)</em></span></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //         </tbody>
      //       </table>

      //       <p>&nbsp;</p>
      //     </div>

      //     <div>
      //       <p><span style="font-size:14px"><span style="color:#66cc00"><strong>5.SHALL</strong></span></span></p>

      //       <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //         <tbody>
      //           <tr>
      //             <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Cách
      //                     Sử Dụng</strong></span></span></td>
      //             <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Ví
      //                     dụ</strong></span></span></td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- Dùng trong cấu trúc thì Tương lai
      //                   (Simple Future) ở ngôi thứ nhất.</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><span style="color:#000000"><em>I <u><strong>shall</strong></u>
      //                         do what I like.</em></span></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">-&nbsp;Diễn tả một lời hứa (promise),
      //                   một sự quả quyết (determination) hay một mối đe dọa (threat).</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000">If you work hard, you
      //                         <u>shall</u> have a holiday on Saturday.
      //                         (<u><strong>promise</strong></u>)</span></em></span></li>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000">He <u>shall</u> suffer for
      //                         this; he shall pay you what he owes you.
      //                         (<u><strong>threat</strong></u>)</span></em></span></li>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000">These people want to buy my
      //                         house, but they <u>shan't</u> have it.
      //                         (<u><strong>determination</strong></u>)</span></em></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //         </tbody>
      //       </table>

      //       <p><span style="font-size:14px"><span style="color:#66cc00"><strong>6.&nbsp;SHOULD</strong></span></span>
      //       </p>

      //       <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //         <tbody>
      //           <tr>
      //             <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Cách
      //                     Sử Dụng</strong></span></span></td>
      //             <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Ví
      //                     Dụ</strong></span></span></td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- Dùng trong câu khuyên ai đó nên làm
      //                   gì, và tương đương với ought to.</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000">You
      //                         <u><strong>should</strong></u> do what the teacher tells you. (Bạn nên làm theo những gì
      //                         giáo viên nói với bạn.)</span></em></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- Dùng thay cho must khi không muốn
      //                   diễn tả một ý nghĩa quá bắt buộc ai đó phải làm gì.</span></span></td>
      //             <td><span style="font-size:14px"><span style="color:#000000">Members who want tickets for the dance
      //                   should apply before September 1st to the Secretary.</span></span></td>
      //           </tr>
      //         </tbody>
      //       </table>

      //       <p><span style="font-size:14px"><span style="color:#66cc00"><strong>7.&nbsp;WILL:</strong></span></span>
      //       </p>

      //       <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //         <tbody>
      //           <tr>
      //             <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Cách
      //                     Sử Dụng</strong></span></span></td>
      //             <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Ví
      //                     Dụ</strong></span></span></td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- Được dùng ở thì Tương lai (simple
      //                   future), diễn tả một kế hoạch (plan), sự mong muốn (willingness), một lời hứa (promise) hay
      //                   một sự quả quyết (determination).</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000">All right; I <u>will</u> pay
      //                         you at the rate you ask. (<u><strong>willingness</strong></u>).&nbsp;<br>
      //                         Được rồi; Tôi sẽ trả cho bạn theo tỷ lệ bạn yêu cầu.&nbsp;</span></em></span></li>
      //                 <li><span style="font-size:14px"><span style="color:#000000"><em>I won't forget little
      //                         Margaret's birthday. I <u>will</u> send her a present.
      //                         (<u><strong>promise</strong></u>).&nbsp;<br>
      //                         Tôi sẽ không quên ngày sinh nhật của Margaret. Tôi sẽ gửi cho cô một món
      //                         quà.</em></span></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- Dùng trong câu đề nghị.</span></span>
      //             </td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><em><span
      //                         style="color:#000000"><u><strong>Will</strong></u><strong> </strong>you shut the door?
      //                         (Bạn sẽ đóng cửa?)</span></em></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //         </tbody>
      //       </table>

      //       <p><span style="font-size:14px"><strong><span style="color:#66cc00">8.&nbsp;WOULD</span></strong></span>
      //       </p>

      //       <table border="1" cellpadding="1" cellspacing="1" style="width:704px">
      //         <tbody>
      //           <tr>
      //             <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Cách
      //                     Sử Dụng</strong></span></span></td>
      //             <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Ví
      //                     Dụ</strong></span></span></td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- Dùng để hình thành thì Tương lai
      //                   trong quá khứ (future in the past) hay các thì trong câu điều kiện.</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000">He said he
      //                         <u><strong>would</strong></u> send it to me, but he didn't. (Anh ấy nói anh ấy sẽ gửi nó
      //                         cho tôi, nhưng anh ấy không gửi.)</span></em></span></li>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000">If she were here, she
      //                         <u><strong>would</strong></u> help us. (Nếu cô ấy ở đây, cô ấy sẽ giúp chúng
      //                         tôi.)</span></em></span></li>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000">He
      //                         <u><strong>would</strong></u> have been very happy if he had known about it. (Anh ấy sẽ
      //                         rất hạnh phúc nếu anh ấy biết về nó.)</span></em></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- Diễn tả một thói quen trong quá khứ.
      //                   Với nghĩa này, WOULD có thể dùng thay cho used to.</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><em><span style="color:#000000">Every day he
      //                         <u><strong>would</strong></u> get up at six o'clock and light the
      //                         fire.</span></em></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //         </tbody>
      //       </table>

      //       <p>&nbsp;</p>

      //       <p><span style="font-size:14px"><span style="color:#66cc00"><strong>9.&nbsp;OUGHT
      //               TO</strong></span></span></p>

      //       <p><span style="font-size:14px"><span style="color:#000000"><strong>OUGHT TO</strong> có nghĩa là “nên”,
      //             gần giống với should. Trong hầu hết các trường hợp OUGHT TO có thể được thay thế bằng should.<br>
      //             Eg:</span></span></p>

      //       <ul>
      //         <li><span style="font-size:14px"><span style="color:#000000"><em>They <u><strong>ought to</strong></u>
      //                 (should) pay the money. (Họ nên (nên) trả tiền.)</em></span></span></li>
      //         <li><span style="font-size:14px"><em><span style="color:#000000">He <u><strong>ought to</strong></u>
      //                 (should) be ashamed of himself. (Anh ta nên xấu hổ với chính mình.)</span></em></span></li>
      //       </ul>

      //       <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //         <tbody>
      //           <tr>
      //             <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Cách
      //                     Sử Dụng</strong></span></span></td>
      //             <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Ví
      //                     Dụ</strong></span></span></td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- <strong>OUGHT TO</strong> cũng dùng
      //                   để diễn tả một sự gần đúng, rất có thể đúng (strong probability).</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><span style="color:#000000"><em>If Alice left home at 9:00, she
      //                         <u><strong>ought to</strong></u> be here any minute now.</em></span></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- <strong>OUGHT TO</strong> có thể dùng
      //                   trong tương lai với các từ xác định thời gian tương lai như tomorrow, next
      //                   Tuesday…</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><span style="color:#000000"><em>Our team <u><strong>ought
      //                             to</strong></u> win the match tomorrow.</em></span></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //           <tr>
      //             <td><span style="font-size:14px"><span style="color:#000000">- <strong>OUGHT NOT TO HAVE + past
      //                     participle</strong> diễn tả một sự không tán đồng về một hành động đã làm trong quá
      //                   khứ.</span></span></td>
      //             <td>
      //               <ul>
      //                 <li><span style="font-size:14px"><span style="color:#000000"><em>You <u><strong>ought not
      //                             to</strong></u> have spent all that money on such a thing.</em></span></span></li>
      //               </ul>
      //             </td>
      //           </tr>
      //         </tbody>
      //       </table>

      //       <p>&nbsp;</p>

      //       <p style="text-align:center"><span style="font-size:14px"><span
      //             style="color:#000000"><strong>-----</strong></span></span></p>

      //     </div>
      //     <p></p>
      //   </div>`
      //   }
      // )
      // await newGrammarPart6.save()
      // const newGrammarPart7 = GrammarPartModel(
      //   {
      //     name:"Nouns: Danh từ",
      //      content: ` <div class="last-content">
      //      <p style="text-align:justify"><br>
      //        <span style="font-size:14px"><span style="color:#0099ff"><strong>I. DANH TỪ LÀ GÌ?</strong></span></span>
      //      </p>
      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>Danh từ</strong> (Noun) là từ dùng để chỉ
      //              người, đồ vật, con vật, địa điểm, hiện tượng, khái niệm, ... thường được ký hiệu: "N" hoặc
      //              "n"</span></span></span></p>
      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Eg:&nbsp;</span></span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif"><em>Table (n): cái bàn</em></span></span></span>
      //        </li>
      //        <li style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif"><em>Sea (n): Biển</em></span></span></span></li>
      //        <li style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif"><em>Cat (n): Con mèo</em></span></span></span></li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span
      //            style="font-family:arial,helvetica,sans-serif"><span style="color:#0099ff"><strong>II. VAI TRÒ CỦA
      //                DANH TỪ TRONG CÂU</strong></span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#ff8c00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">1. Làm chủ ngữ trong
      //                câu</span></strong></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Eg:&nbsp;</span></span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif"><strong><u>My
      //                    dog</u>&nbsp;<u>is</u>&nbsp;<u>yellow</u></strong>&nbsp;</span></span><span
      //              style="color:#008000"><span style="font-family:arial,helvetica,sans-serif"><em>(Còn chó của tôi màu
      //                  vàng.)</em></span></span></span></li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;S
      //              &nbsp; &nbsp; &nbsp;V &nbsp; &nbsp; Adj</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Trong đó: &nbsp; &nbsp; &nbsp;</span></span><span
      //            style="color:#000000; font-family:arial,helvetica,sans-serif">S (Subject): Chủ ngữ</span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      //              &nbsp; &nbsp; &nbsp; &nbsp;V (verb): Động từ</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      //              &nbsp; &nbsp; &nbsp; &nbsp;Adj (Adjective): Tính từ</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Ta thấy, danh từ "Dog" đóng vai trò làm chủ ngữ
      //              trong câu.</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#ff8c00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">2. Làm tân ngữ trong
      //                câu</span></strong></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Eg:</span></span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif"><strong><u>We</u>&nbsp;<u>read</u>&nbsp;<u>books</u>&nbsp;<u>everyday</u>&nbsp;</strong></span></span><span
      //              style="color:#008000"><span style="font-family:arial,helvetica,sans-serif"><em>(Chúng tôi đọc sách
      //                  hàng ngày)</em></span></span></span></li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;S &nbsp;
      //              &nbsp; V &nbsp; &nbsp; &nbsp; &nbsp;O &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Adv</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Trong đó: &nbsp; &nbsp; &nbsp;
      //              &nbsp;&nbsp;</span></span><span style="color:#000000; font-family:arial,helvetica,sans-serif">S
      //            (Subject): Chủ ngữ</span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      //              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; V (verb): Động từ</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      //              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O (Object): Tân ngữ</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      //              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Adv (Adverb): Trạng từ</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Ta thấy, danh từ "Dog" đóng vai trò làm chủ ngữ
      //              trong câu.</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#ff8c00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">3. Làm bổ ngữ cho chủ
      //                ngữ</span></strong></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Eg: </span></span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">My father is <u><strong>a teacher</strong></u>
      //                </span></span><span style="color:#008000"><span style="font-family:arial,helvetica,sans-serif">(
      //                  Bố tôi là giáo viên)</span></span></em></span></li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Trong ví dụ "A teacher" là một danh từ và được
      //              dùng làm bổ ngữ cho chủ ngữ "my father".</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#ff8c00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">4. Bổ ngữ cho giới từ</span></strong></span></span>
      //      </p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Eg:</span></span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">I met him <strong><u>at</u> <u>the
      //                      station</u></strong> yesterday. </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">( tôi đã gặp anh ấy tại nhà ga ngày hôm qua
      //                  )</span></span></em></span></li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Trong đó: “at” là giới từ và “station” là danh
      //              từ -&gt; Đây là một cụm giới từ chỉ địa điểm, nơi chốn.</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#ff8c00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">5. Bổ ngữ cho tân ngữ</span></strong></span></span>
      //      </p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Eg:</span></span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">They named <u><strong>their cat</strong></u>
      //                  <u><strong>Sen</strong></u>. </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Họ đặt tên cho con mèo của họ là
      //                  Sen.)</span></span></em></span></li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Trong đó: Sen là danh từ chỉ tên riêng và nó
      //              đứng sau và làm bổ ngữ cho tân ngữ “the cat”. &nbsp; &nbsp; &nbsp;&nbsp;</span></span></span></p>



      //      <p style="text-align:justify"><br>
      //        <span style="font-size:14px"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="color:#0099ff"><strong>III. PHÂN LOẠI DANH TỪ</strong></span></span></span>
      //      </p>

      //      <p style="text-align:justify"><span style="font-size:14px"><strong><span style="color:#ff8c00"><span
      //                style="font-family:arial,helvetica,sans-serif">-&nbsp;Cách phân loại thứ nhất dựa vào tính chất,
      //                đặc điểm: có 2 loại danh từ.</span></span></strong></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#66cc00"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>1. Danh từ cụ thể (Concrete
      //                nouns)</strong>:</span></span><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif"> Dùng để chỉ những đối tượng cụ thể có thể nhìn thấy
      //              được như con người, đồ vật, con vật, địa điểm, ...)</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Danh từ cụ thể được chia làm 2
      //              loại:</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">+ <strong>Danh từ chung (Common nouns)</strong>: Dùng
      //              để chỉ tên chung cho một loại đối tượng hay một loại vật dụng, nơi chốn …</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Eg:</span></span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">School (n): (trường học) &nbsp; &nbsp;
      //                  &nbsp;</span></span></em></span></li>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">Hotel (n): Khách sạn &nbsp; &nbsp; &nbsp; &nbsp;
      //                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></span></em></span></li>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">Man (n): người đàn ông</span></span></em></span>
      //        </li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">+ <strong>Danh từ riêng (Proper nouns)</strong>: Dùng
      //              để chỉ tên riêng (tên người, tên vật, tên địa điểm,..)</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Eg:&nbsp;</span></span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">His name is <strong><u>Luan</u></strong>:
      //                </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Tên của anh ấy là Luan.)</span></span><span
      //                style="color:#000000"><span style="font-family:arial,helvetica,sans-serif"> -&gt; “Luan” là danh
      //                  từ riêng chỉ tên người</span></span></em></span></li>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">I live in <strong><u>Danang</u></strong>.
      //                </span></span><span style="color:#008000"><span
      //                  style="font-family:arial,helvetica,sans-serif">(Tôi sống ở Đà Nẵng.)</span></span><span
      //                style="color:#000000"><span style="font-family:arial,helvetica,sans-serif"> -&gt; “Danang” là danh
      //                  từ riêng chỉ tên địa điểm.</span></span></em></span></li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#66cc00"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>2. Danh từ trừu tượng (Abstract
      //                nouns)</strong>:</span></span><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif"> Dùng để chỉ những thứ trừu tượng không thể nhìn thấy
      //              được mà chỉ cảm nhận được như (cảm xúc, cảm giác, vị giác,…)</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Eg:</span></span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">Happiness (n): hạnh phúc &nbsp; &nbsp; &nbsp;
      //                  &nbsp; &nbsp;&nbsp;</span></span></em></span></li>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">Sadness (n): sự buồn bã &nbsp; &nbsp;
      //                  &nbsp;</span></span></em></span></li>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif">Spirit (n): tinh thần</span></span></em></span>
      //        </li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#ff8c00"><strong><span
      //                style="font-family:arial,helvetica,sans-serif">-&nbsp;Cách phân loại thứ hai dựa vào số lượng ta
      //                chia làm 2 loại danh từ:</span></strong></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#66cc00"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>1. Danh từ đếm
      //                được</strong></span></span><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">:&nbsp;</span>là những danh từ có thể thêm trực tiếp
      //            số đếm vào trước nó.</span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Eg:</span></span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><u>One</u> student: một học
      //                  sinh</span></span></em></span></li>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><u>Two</u> pens: 2 cái
      //                  bút</span></span></em></span></li>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><u>Seven</u> dollars: 7 đô
      //                  la</span></span></em></span></li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Ta thấy “one”, “two” và “seven” là số đếm. Và
      //              những danh từ theo ngay sau những số đếm này là gọi là các danh từ đếm được.</span></span></span>
      //      </p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">*Trong danh từ đếm được, chúng lại được chia thành 2
      //              loại:</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">+ <strong>Danh từ đếm được số
      //                ít:</strong></span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Đặc điểm: số lượng chỉ có 1. Thường đi đi sau “a/an”
      //              hoặc “one”. Không có dạng số nhiều (không có “s” hoặc “es” ở cuối từ.)</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Eg:</span></span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">I have <strong><u>a</u></strong>
      //                <u><strong>pen</strong></u>. </span></span><span style="color:#008000"><span
      //                style="font-family:arial,helvetica,sans-serif"><em>(Tôi có một cái bút.)
      //                  &nbsp;</em></span></span><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif"><em> &nbsp; &nbsp; </em>&nbsp;</span></span></span>
      //        </li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Trong đó “một cái bút” là số ít và danh từ
      //              “pen” không có dạng số nhiều (không có “s” ở cuối từ).</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><strong><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">+ Danh từ đếm được số
      //                nhiều:</span></span></strong></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Đặc điểm: Số lượng từ 2 trở lên. Luôn ở dạng số nhiều
      //              (thường có “s” hoặc “es” ở cuối từ).</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Eg:</span></span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //                style="font-family:arial,helvetica,sans-serif">I have <u><strong>two</strong></u>
      //                <strong><u>pens</u></strong>. </span></span><span style="color:#008000"><span
      //                style="font-family:arial,helvetica,sans-serif"><em>(Tôi có 2 cái bút.)</em></span></span></span>
      //        </li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">=&gt; Ta thấy “hai cái bút” là số nhiều và danh từ
      //              “pens” ở dạng số nhiều và có “s” ở cuối từ.</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#66cc00"><span
      //              style="font-family:arial,helvetica,sans-serif"><strong>2. Danh từ không đếm
      //                được</strong></span></span><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">: Là những danh từ không thể đếm trực tiếp hay nói
      //              cách khác không thể cho số đếm đứng ngay trước danh từ và thường phải có đơn vị cân, đo, đong đếm
      //              phía trước.</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Đặc điểm: không sử dụng số đếm trực tiếp phía trước,
      //              và không bao giờ có dạng số nhiều.</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Eg:</span></span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000"><span
      //                  style="font-family:arial,helvetica,sans-serif"><strong>Sugar </strong>(n):
      //                  đường</span></span></em></span></li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Chúng ta KHÔNG sử dụng: <u><strong>one</strong></u>
      //              sugar (một đường)</span></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><span
      //              style="font-family:arial,helvetica,sans-serif">Thường sử dụng: <u><strong>One kilo</strong></u> of
      //              sugar (một cân đường) -&gt; ta phải thêm đơn vị cân vào phía trước. và “sugar” không có dạng số
      //              nhiều.</span></span></span><br>
      //        &nbsp;</p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#0099ff"><strong>IV. CÁCH BIẾN
      //              ĐỔI DANH TỪ SỐ ÍT SANG DANH TỪ SỐ NHIỀU VÀ CÁCH SỬ DỤNG A/AN TRƯỚC DANH TỪ ĐẾM ĐƯỢC SỐ
      //              ÍT</strong></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#ff8c00"><strong>1. Cách biến
      //              đổi danh từ số ít sang danh từ số nhiều</strong></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#66cc00"><strong>a. Hầu hết ta
      //              thêm "S" vào sau danh từ</strong></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">Eg:</span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:704px">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><strong>Danh
      //                    từ số ít</strong></span></span></td>
      //            <td style="text-align:justify">&nbsp;</td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><strong>Danh
      //                    từ số nhiều</strong></span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">A finger (một
      //                  ngón tay)</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">Finger<strong><u>s</u></strong> (nhiều/những ngón tay)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">A ruler (một
      //                  cây thước kẻ)</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">Ruler<strong><u>s</u></strong> (nhiều/những cây thước kẻ</span></span>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">A house ( một
      //                  ngôi nhà )</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">House<u><strong>s</strong></u> (nhiều/những ngôi nhà)</span></span></td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#66cc00"><strong>b.&nbsp;Những
      //              danh từ tận cùng bằng: S, SS, SH, CH, X, O + ES</strong></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">Eg:</span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:704px">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><strong>Danh
      //                    từ số ít</strong></span></span></td>
      //            <td style="text-align:justify">&nbsp;</td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><strong>Danh
      //                    từ số nhiều</strong></span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">A
      //                  bu<u><strong>s</strong></u> (một chiếc xe buýt)</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">Two
      //                  bus<strong><u>es</u></strong>&nbsp;(2 chiếc xe buýt)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">A
      //                  cla<strong><u>ss</u> </strong>(một lớp học)</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">Three
      //                  class<strong><u>es</u></strong>&nbsp;(3 lớp học)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">A
      //                  bu<u><strong>sh</strong></u> (một bụi cây)</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">Bush<strong><u>es</u></strong>&nbsp;(những bụi cây)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">A
      //                  wat<u><strong>ch</strong></u> (một cái đồng hồ đeo tay)</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">Five
      //                  watch<strong><u>es</u></strong>&nbsp;(5 cái đồng hồ đeo tay)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">A
      //                  bo<u><strong>x</strong></u> (một cái hộp)</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">Two
      //                  box<strong><u>es</u></strong>&nbsp;(2 cái hộp)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">A
      //                  tomat<u><strong>o</strong></u> (một quả cà chua)</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">Tomato<strong><u>es</u></strong>&nbsp;(những quả cà chua)</span></span>
      //            </td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">- <strong>Trường hợp
      //              ngoại lệ:</strong> Một số danh từ mượn không phải là tiếng Anh gốc, có tận cùng bằng
      //            “<strong>o</strong>” nhưng ta chỉ thêm “<strong>S</strong>” như:</span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:704px">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><strong>Danh
      //                    từ số ít</strong></span></span></td>
      //            <td style="text-align:justify">&nbsp;</td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><strong>Danh
      //                    từ số nhiều</strong></span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">a photo (một
      //                  bức ảnh)</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">photos (những
      //                  bức ảnh)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">a radio ( một
      //                  cái đài)&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">radios (những
      //                  cái đài)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">a bamboo (một
      //                  cây tre)</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">bamboos (những
      //                  cây tre) &nbsp;</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">a kangaroo
      //                  (một con chuột túi</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">kangaroos
      //                  (những con chuột túi)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">a cuckoo (một
      //                  con chim cu gay)</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">cuckoos (những
      //                  con chim cu gáy)</span></span></td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#66cc00"><strong>C. Những danh
      //              từ tận cùng bằng “y”:</strong></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">- <strong>Nếu trước
      //              “y” là một phụ âm ta đổi “y” -&gt; i+es</strong></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">Eg:</span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000">a
      //                f<u><strong>ly</strong></u><strong> </strong>(một con ruồi) -&gt; two
      //                fl<u><strong>ies</strong></u> (hai con ruồi)</span></em></span></li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">=&gt; danh từ “fly”
      //            tận cùng là “y”, trước “y” là một phụ âm “l” nên ta đổi “y” -&gt; i+es</span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><strong><span style="color:#000000">- Nếu trước
      //              “y” là một nguyên âm (a,e,i,o,u) ta chỉ việc thêm “s” sau “y”</span></strong></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">Eg:</span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000">A
      //                b<u><strong>oy</strong></u> (một cậu bé) -&gt; Two bo<u><strong>ys</strong></u> (hai cậu
      //                bé)</span></em></span></li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">=&gt; danh từ “boy”
      //            tận cùng là “y”, trước “y” là một nguyên âm “o” nên ta giữ nguyên “y” + s.</span></span></p>



      //      <p style="text-align:justify"><br>
      //        <span style="font-size:14px"><span style="color:#66cc00"><strong>D. Những danh từ tận cùng bằng “F” hoặc
      //              “Fe” ta biến đổi: f/fe -&gt; v+es</strong></span></span>
      //      </p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">Eg:</span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000">A
      //                lea<u><strong>f</strong></u> (một chiếc lá) -&gt; Lea<u><strong>ves</strong></u> (những chiếc
      //                lá)</span></em></span></li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">=&gt; Danh từ “leaf”
      //            tận cùng là “F” nên ta biến đổi “F” -&gt; v+es</span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000">A
      //                kni<u><strong>fe</strong></u> (một con dao) -&gt; Three kni<u><strong>ves</strong></u> (3 con
      //                dao)</span></em></span></li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">=&gt; Danh từ “knife”
      //            tận cùng bằng “Fe” nên ta đổi “Fe” -&gt; v+es</span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><strong><span style="color:#000000">- Trường hợp
      //              ngoại lệ</span></strong></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:704px">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">Roof<u><strong>s</strong></u>: mái nhà &nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">&nbsp;Gulf<u><strong>s</strong></u>: vịnh &nbsp;&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">Cliff<u><strong>s</strong></u>: bờ đá dốc&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">Reef<u><strong>s</strong></u>: đá&nbsp;</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">Proof<u><strong>s</strong></u>: bằng chứng</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">Chief<u><strong>s</strong></u>: thủ lãnh</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">Safe<u><strong>s</strong></u>: tủ sắt&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">Dwarf<u><strong>s</strong></u> : người lùn</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">Turf<u><strong>s</strong></u>: lớp đất mặt&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">Grief<u><strong>s</strong></u>: nỗi đau khổ</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">Belief<u><strong>s</strong></u> : niềm tin</span></span></td>
      //            <td style="text-align:justify">&nbsp;</td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#66cc00"><strong>E.&nbsp;Có
      //              một số danh từ dạng đặc biệt, không theo quy tắc trên:</strong></span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:704px">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><strong>Danh
      //                    từ số ít</strong></span></span></td>
      //            <td style="text-align:justify">&nbsp;</td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><strong>Danh
      //                    từ số nhiều</strong></span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">a tooth (một
      //                  cái răng) &nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">teeth (những
      //                  cái răng)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">a foot (một
      //                  bàn chân)&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">feet (những
      //                  bàn chân)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">a person (một
      //                  người) &nbsp;&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">people ( những
      //                  người)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">a man (một
      //                  người đàn ông)&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">men (những
      //                  người đàn ông)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">a woman (một
      //                  người phụ nữ) &nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">women (những
      //                  người phụ nữ)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">a policeman
      //                  (một cảnh sát) &nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">policemen
      //                  (những cảnh sát)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">a mouse (một
      //                  con chuột)&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">mice (những
      //                  con chuột)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">a goose (một
      //                  con ngỗng)&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">geese (những
      //                  con ngỗng)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">an ox (một con
      //                  bò đực)</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">oxen (những
      //                  con bò đực)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">a child (một
      //                  đứa trẻ)</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">hildren (những
      //                  đứa trẻ)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">a fish (một
      //                  con cá)</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">ish (những con
      //                  cá)</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">a sheep (một
      //                  con cừu) &nbsp;&nbsp;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span
      //                  style="color:#000000">---&gt;</span></span></td>
      //            <td style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">sheep (những
      //                  con cừu)</span></span></td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#ff8c00"><strong>2.&nbsp;CÁCH
      //              SỬ DỤNG A/AN TRƯỚC DANH TỪ ĐẾM ĐƯỢC SỐ ÍT</strong></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">- Chúng ta dùng a/an
      //            trước một danh từ số ít đếm được. "a/an" đều có nghĩa là một. Chúng được dùng trong câu có tính khái
      //            quát hoặc đề cập đến một chủ thể chưa được đề cập từ trước.</span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">Eg:</span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><em>A dog is
      //                running on the street. </em></span><span style="color:#008000"><em>(Một con chó đang chạy trên
      //                đường phố.)</em></span></span></li>
      //        <li style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><em>I saw a girl
      //                dancing very well last night. </em></span><span style="color:#008000"><em>(Tôi thấy một cô gái
      //                nhảy rất tốt đêm qua.)</em></span></span></li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">+ <strong>Mạo từ
      //              “an”: được sử dụng trước một danh từ đếm được, số ít và được bắt đầu bằng một nguyên
      //              âm.</strong></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">- Ta dùng “an” với
      //            những danh từ bắt đầu bằng nguyên âm a, e, i, o, u.&nbsp;(cách nhớ: uể oải)</span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">Eg:</span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><span style="color:#000000"><em>an
      //                <u><strong>a</strong></u>pple (một quả táo)</em></span></span></li>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000">an
      //                <u><strong>e</strong></u>gg (một quả trứng)</span></em></span></li>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000">an
      //                <u><strong>u</strong></u>mbrella (một cái ô)</span></em></span></li>
      //      </ul>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">+ <strong>Mạo từ “a”:
      //              được sử dụng trước một danh từ đếm được số ít và được bắt đầu bằng một phụ
      //              âm.</strong></span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">- Ngoài 5 nguyên âm
      //            kể trên thì còn lại sẽ là phụ âm.</span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">Ta dùng “a” với những
      //            danh từ bắt đầu bằng phụ âm và một số danh từ bắt đầu bằng u, y, h.</span></span></p>

      //      <p style="text-align:justify"><span style="font-size:14px"><span style="color:#000000">Eg:</span></span></p>

      //      <ul>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000">a book (một
      //                quyền sách)</span></em></span></li>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000">a computer
      //                (một cái máy tính)</span></em></span></li>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000">a year ( một
      //                năm )</span></em></span></li>
      //        <li style="text-align:justify"><span style="font-size:14px"><em><span style="color:#000000">A house ( một
      //                căn nhà )</span></em></span></li>
      //      </ul>

      //      <p style="text-align:center"><span style="font-size:14px"><span
      //            style="color:#000000"><strong>-----</strong></span></span></p>


      //    </div>`
      //   }
      // )
      // await newGrammarPart7.save()
      // const newGrammarPart8 = GrammarPartModel(
      //   {
      //     name:"Pronouns: Đại từ ",
      //      content: ` <div class="last-content">


      //      <p><span style="color:#0099ff"><strong><span style="font-size:16px">I. ĐẠI TỪ&nbsp; TRONG TIẾNG ANH LÀ
      //              GÌ?</span></strong></span></p>

      //      <p><span style="color:#000000"><span style="font-size:16px"><strong>Đại từ trong tiếng Anh</strong>&nbsp;là
      //            từ thay thế cho danh từ trong câu, tránh sự lặp lại danh từ. Với nhiều chức năng khác nhau, đại từ
      //            trong tiếng Anh được phân ra các loại chính như sau: Đại từ nhân xưng (Personal pronouns), đại từ sở
      //            hữu (Possessive pronoun), đại từ phản thân (reflexive pronouns)&nbsp;và đại từ nhấn
      //            mạnh.</span></span></p>

      //      <p><br>
      //        <span style="color:#0099ff"><strong><span style="font-size:16px">II. PHÂN LOẠI ĐẠI TỪ TRONG TIẾNG
      //              ANH</span></strong></span>
      //      </p>

      //      <p><span style="color:#66cc00"><strong><span style="font-size:16px">1. Đại từ nhân
      //              xưng</span></strong></span></p>

      //      <p><span style="color:#000000"><span style="font-size:16px">- Đại từ nhân xưng gồm đại từ chủ ngữ (Subject
      //            pronoun) và đại từ tân ngữ (Object pronoun)</span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:704px">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center">&nbsp;</td>
      //            <td colspan="2" rowspan="1" style="text-align:center"><span style="color:#ff8c00"><span
      //                  style="font-size:16px"><strong>Số ít</strong></span></span></td>
      //            <td colspan="2" rowspan="1" style="text-align:center"><span style="color:#ff8c00"><span
      //                  style="font-size:16px"><strong>Số nhiều</strong></span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center">&nbsp;</td>
      //            <td style="text-align:center"><span style="color:#000000"><span style="font-size:16px"><strong>Đại từ
      //                    làm chủ ngữ</strong></span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span style="font-size:16px"><strong>Đại từ
      //                    làm tân ngữ</strong></span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span style="font-size:16px"><strong>Đại từ
      //                    làm chủ ngữ</strong></span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span style="font-size:16px"><strong>Đại từ
      //                    làm tân ngữ</strong></span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#ff8c00"><span style="font-size:16px"><strong>Ngôi
      //                    1</strong></span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span style="font-size:16px">I</span></span>
      //            </td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Me</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">We</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Us</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#ff8c00"><span style="font-size:16px"><strong>Ngôi
      //                    2</strong></span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">You</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">You</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">You</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">You</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#ff8c00"><span style="font-size:16px"><strong>Ngôi
      //                    3</strong></span></span></td>
      //            <td>
      //              <p style="text-align:center"><span style="color:#000000"><span
      //                    style="font-size:16px">He</span></span></p>

      //              <p style="text-align:center"><span style="color:#000000"><span
      //                    style="font-size:16px">She</span></span></p>

      //              <p style="text-align:center"><span style="color:#000000"><span
      //                    style="font-size:16px">It</span></span></p>
      //            </td>
      //            <td>
      //              <p style="text-align:center"><span style="color:#000000"><span
      //                    style="font-size:16px">Him</span></span></p>

      //              <p style="text-align:center"><span style="color:#000000"><span
      //                    style="font-size:16px">Her</span></span></p>

      //              <p style="text-align:center"><span style="color:#000000"><span
      //                    style="font-size:16px">It</span></span></p>
      //            </td>
      //            <td>
      //              <p style="text-align:center"><span style="color:#000000"><span
      //                    style="font-size:16px">They</span></span></p>

      //              <p style="text-align:center">&nbsp;</p>

      //              <p style="text-align:center">&nbsp;</p>
      //            </td>
      //            <td>
      //              <p style="text-align:center"><span style="color:#000000"><span
      //                    style="font-size:16px">Them</span></span></p>

      //              <p style="text-align:center">&nbsp;</p>

      //              <p>&nbsp;</p>
      //            </td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><span style="color:#ff8c00"><span style="font-size:16px"><strong>- Cách Dùng Đại Từ Nhân
      //              Xưng</strong></span></span></p>

      //      <p><span style="color:#000000"><span style="font-size:16px">Đại từ nhân xưng được dùng để thay thế cho danh
      //            từ khi không cần thiết sử dụng hoặc lặp lại chính xác danh từ hoặc cụm danh từ đó.</span></span></p>

      //      <p><span style="color:#000000"><span style="font-size:16px">Eg:&nbsp;</span></span></p>

      //      <ul>
      //        <li><span style="color:#000000"><em><span style="font-size:16px">John's broken his
      //                leg.&nbsp;<u><strong>He'll</strong></u>&nbsp;be in hospital for a few days.
      //              </span></em></span><br>
      //          <span style="color:#008000"><em><span style="font-size:16px">(John bị gãy chân. Anh ấy sẽ phải nằm viện
      //                vài ngày)</span></em></span>
      //        </li>
      //      </ul>

      //      <p><span style="color:#000000"><span style="font-size:16px"><strong>+ “I, he, she, we, they” có thể là chủ
      //              ngữ của động từ:</strong><br>
      //            Eg:</span></span></p>

      //      <ul>
      //        <li><span style="color:#000000"><span style="font-size:16px">&nbsp;<em><u><strong>He</strong></u>&nbsp;has
      //                lived here for 3 years. </em></span></span><span style="color:#008000"><span
      //              style="font-size:16px"><em>(Anh ấy đã sống ở đây trong 3 năm.)</em></span></span></li>
      //      </ul>

      //      <p><span style="color:#000000"><span style="font-size:16px"><strong>+ “Me, him, her, us, them” có thể là tân
      //              ngữ trực tiếp của động từ.</strong></span></span></p>

      //      <p><span style="color:#000000"><span style="font-size:16px">Eg:</span></span></p>

      //      <ul>
      //        <li><span style="color:#000000"><em><span style="font-size:16px">&nbsp;I
      //                saw&nbsp;<u><strong>her</strong></u>&nbsp;at the party last night.</span></em></span><span
      //            style="color:#008000"><em><span style="font-size:16px">(Tôi thấy cô ấy ở bữa tiệc đêm
      //                qua)</span></em></span></li>
      //      </ul>

      //      <p><span style="color:#000000"><strong><span style="font-size:16px">+ Có thể là tân ngữ gián tiếp của động
      //              từ.</span></strong></span></p>

      //      <p><span style="color:#000000"><span style="font-size:16px">Eg:&nbsp;</span></span></p>

      //      <ul>
      //        <li><span style="color:#000000"><span style="font-size:16px"><em>Ann
      //                gave&nbsp;<u><strong>him</strong></u>&nbsp;a book.</em></span></span><span
      //            style="color:#008000"><span style="font-size:16px"><em> (Ann đưa cho anh ta một quyển
      //                sách)</em></span></span></li>
      //      </ul>

      //      <p><span style="color:#000000"><strong><span style="font-size:16px">+ Hoặc tân ngữ của giới
      //              từ</span></strong></span></p>

      //      <p><span style="color:#000000"><span style="font-size:16px">Eg:</span></span></p>

      //      <ul>
      //        <li><span style="color:#000000"><em><span style="font-size:16px">We couldn't do it
      //                without&nbsp;<u><strong>them</strong></u>. </span></em></span><span
      //            style="color:#008000"><em><span style="font-size:16px">(Chúng tôi không thể làm điều đó mà không có
      //                họ)</span></em></span></li>
      //      </ul>



      //      <p><span style="color:#66cc00"><strong><span style="font-size:16px">2. Đại từ sở hữu</span></strong></span>
      //      </p>

      //      <p><span style="color:#000000"><span style="font-size:16px"><strong>Đại từ sở hữu</strong>&nbsp;được dùng để
      //            chỉ sự sở hữu và &nbsp;thay thế cho tính từ sở hữu và danh từ để tránh nhắc lại tính từ sở hữu + danh
      //            từ đã được dùng trước đó.</span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:704px">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#ff8c00"><span style="font-size:16px"><strong>Đại từ
      //                    nhân xưng</strong></span></span></td>
      //            <td style="text-align:center"><span style="color:#ff8c00"><span style="font-size:16px"><strong>Đại từ
      //                    sở hữu</strong></span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span style="font-size:16px">I</span></span>
      //            </td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Mine</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">We&nbsp;</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Ours</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span style="font-size:16px">You (số
      //                  ít)</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Yours</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span style="font-size:16px">You (số
      //                  nhiều)</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Yours</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">He</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">His</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">She</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Hers</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">It</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Its</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">They</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Theirs</span></span></td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><span style="color:#000000"><span style="font-size:16px">Eg:</span></span></p>

      //      <ul>
      //        <li><span style="color:#000000"><em><span style="font-size:16px">Which glass
      //                is&nbsp;<u><strong>yours</strong></u>. (yours = your glass) &nbsp; &nbsp; &nbsp; &nbsp;
      //                &nbsp;</span></em></span></li>
      //        <li><span style="color:#000000"><em><span style="font-size:16px">Hoa's hat is blue
      //                and&nbsp;<u><strong>mine</strong></u>&nbsp;is white. (mine = my hat) &nbsp; &nbsp; &nbsp; &nbsp;
      //                &nbsp;</span></em></span></li>
      //        <li><span style="color:#000000"><em><span style="font-size:16px">Their house is large
      //                but&nbsp;<u><strong>ours&nbsp;</strong></u>is small. (ours = our house)</span></em></span></li>
      //      </ul>

      //      <p><span style="color:#000000"><span style="font-size:16px"><strong>- Lưu ý</strong>: Tính từ sở hữu khác
      //            với đại từ sở hữu (My, your, his, her, its, our, your, their) là nó luôn luôn đi với một danh từ. Nó
      //            đứng trước, bổ nghĩa và chỉ sự sở hữu danh từ đó chứ không thay thế cho nó. Còn đại từ sở hữu thì
      //            không có danh từ đứng sau nó như tính từ sở hữu.</span></span></p>

      //      <p><span style="color:#000000"><span style="font-size:16px">Eg: &nbsp; &nbsp; &nbsp; &nbsp;
      //            &nbsp;&nbsp;</span></span></p>

      //      <ul>
      //        <li><span style="color:#000000"><span style="font-size:16px"><em>This is my book. (Tính từ sở hữu + danh
      //                từ)<br>
      //                Đây là quyển sách của tôi.</em></span></span></li>
      //        <li><span style="font-size:16px"><em><span style="color:#000000">This book is mine.&nbsp;(Đại từ sở
      //                hữu)<br>
      //                Cuốn sách này là của tôi&nbsp;</span></em></span></li>
      //      </ul>

      //      <p><span style="color:#66cc00"><strong><span style="font-size:16px">3. Đại từ phản thân&nbsp;(reflexive
      //              pronouns)</span></strong></span></p>

      //      <p><span style="color:#000000"><span style="font-size:16px"><strong>Đại từ phản thân</strong>&nbsp;dùng để
      //            diễn đạt chủ ngữ đồng thời là tác nhân gây ra hành động, hoặc dùng diễn đạt tân ngữ đồng thời là tác
      //            nhân nhận tác động của hành động đó. Nó thường đứng ngay sau động từ hoặc giới từ for,
      //            to.&nbsp;</span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:704px">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#ff8c00"><span style="font-size:16px"><strong>Đại Từ
      //                    Nhân Xưng</strong></span></span></td>
      //            <td style="text-align:center"><span style="color:#ff8c00"><span style="font-size:16px"><strong>Đại Từ
      //                    Phản Thân</strong></span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span style="font-size:16px">I</span></span>
      //            </td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Myself</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span style="font-size:16px">You (số
      //                  ít)</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Yourself</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">He</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Himself</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">She&nbsp;</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Herself</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">It</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Itself</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">We</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Ourselves</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span style="font-size:16px">You (số
      //                  nhiều)</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Yourselves</span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">They</span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px">Themselves</span></span></td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><span style="color:#ff8c00"><strong><span style="font-size:16px">- Cách Dùng Đại Từ Phản
      //              Thân</span></strong></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:704px">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><span style="font-size:16px"><strong>Cách Sử
      //                    Dụng</strong></span></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><span
      //                  style="font-size:16px"><strong>Example:</strong></span></span></td>
      //          </tr>
      //          <tr>
      //            <td>
      //              <p><span style="color:#000000"><span style="font-size:16px">- Làm tân ngữ của động từ khi chủ ngữ và
      //                    tân ngữ là cùng một người</span></span></p>

      //              <p><span style="color:#000000"><span style="font-size:16px">-&nbsp;<span
      //                      style="font-family:helvetica neue,helvetica,arial,sans-serif">Nó có thể đứng ngay sau động
      //                      từ hoặc sau&nbsp;động từ&nbsp;+&nbsp;</span><span
      //                      style="font-family:helvetica neue,helvetica,arial,sans-serif">giới từ</span><span
      //                      style="font-family:helvetica neue,helvetica,arial,sans-serif">.</span></span></span></p>
      //            </td>
      //            <td>
      //              <p><span style="color:#000000"><span style="font-size:16px">- He
      //                    cut&nbsp;<u><strong>himself</strong></u>&nbsp;</span></span><span style="color:#008000"><span
      //                    style="font-size:16px">(Anh ấy tự cắt vào tay mình)</span></span></p>

      //              <p><span style="color:#000000"><span style="font-size:16px">-&nbsp;I'm annoyed
      //                    with&nbsp;<strong><u>myself</u>&nbsp;</strong></span></span><span style="color:#008000"><span
      //                    style="font-size:16px">(Tôi đang tức giận với bản thân mình)</span></span></p>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td>
      //              <p><span style="color:#000000"><span style="font-size:16px">- Được sử dụng như các đại từ nhấn mạnh
      //                    danh từ hoặc đại từ.</span></span></p>

      //              <p><span style="color:#000000"><span style="font-size:16px">- Khi nhấn mạnh danh từ trong câu, chúng
      //                    được đặt ngay sau danh từ đó.</span></span></p>
      //            </td>
      //            <td>
      //              <p><span style="color:#000000"><span style="font-size:16px">-&nbsp;The
      //                    president&nbsp;<u><strong>himself</strong></u>&nbsp;gave him the gift. </span></span><br>
      //                <span style="color:#008000"><span style="font-size:16px">(Chính tổng thống đã tặng ông món
      //                    quà.)</span></span>
      //              </p>

      //              <p><span style="color:#000000"><span style="font-size:16px">-&nbsp;I spoke to the
      //                    manager&nbsp;<u><strong>himself</strong></u>. </span></span><br>
      //                <span style="color:#008000"><span style="font-size:16px">(Tôi đã nói chuyện với người quản
      //                    lý.)</span></span>
      //              </p>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td><span style="color:#000000"><span style="font-size:16px">- Đại từ phản thân được sử dụng như các
      //                  tân ngữ sau giới từ</span></span></td>
      //            <td><span style="color:#000000"><span style="font-size:16px">-&nbsp;He did it
      //                  by&nbsp;<u><strong>himself</strong></u>. </span></span><br>
      //              <span style="color:#008000"><span style="font-size:16px">(Anh ấy đã làm nó một mình.) &nbsp;
      //                  &nbsp;&nbsp;</span></span>
      //            </td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><span style="color:#66cc00"><strong><span style="font-size:16px">4. Đại Từ Nhấn
      //              Mạnh</span></strong></span></p>

      //      <p><span style="color:#000000"><span style="font-size:16px">-&nbsp;<strong>Đại từ nhấn mạnh</strong>&nbsp;có
      //            hình thức giống với đại từ phản thân nhưng có cách sử dụng khác với chúng. (Đại từ nhấn mạnh được dùng
      //            để nhấn mạnh cho danh từ, và đại từ nhân xưng trong câuvà có nghĩa chính (tôi, anh ta,
      //            ...)</span></span></p>

      //      <p><strong><span style="color:#000000"><span style="font-size:16px">- Hình thức: Myself, Yourself, Himself,
      //              Herself, Itself, Ourselves, Yourselves, Themselves.</span></span></strong></p>

      //      <p><strong><span style="color:#ff8c00"><span style="font-size:16px">Cách Dùng Đại Từ Nhấn
      //              Mạnh</span></span></strong></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:704px">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="color:#000000"><strong><span style="font-size:16px">Cách Sử
      //                    Dụng</span></strong></span></td>
      //            <td style="text-align:center"><span style="color:#000000"><strong><span
      //                    style="font-size:16px">Example:</span></strong></span></td>
      //          </tr>
      //          <tr>
      //            <td><span style="color:#000000"><span style="font-size:16px">- Nhấn mạnh chủ ngữ</span></span></td>
      //            <td>
      //              <p><span style="color:#000000"><span style="font-size:16px">- My mother opened the door&nbsp;herself
      //                  </span></span><br>
      //                <span style="color:#008000"><span style="font-size:16px">(Mẹ tôi đã tự mở cửa ra)</span></span>
      //              </p>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td><span style="color:#000000"><span style="font-size:16px">- Nhấn mạnh tân ngữ và đứng ngay sau tân
      //                  ngữ</span></span></td>
      //            <td><span style="color:#000000"><span style="font-size:16px">- I want to see the letter itself, not
      //                  the copy&nbsp;</span></span><br>
      //              <span style="color:#008000"><span style="font-size:16px">(Tôi muốn nhìn thấy bức thư đó, không phải
      //                  là bản sao)</span></span>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td>
      //              <p><span style="color:#000000"><span style="font-size:16px">- Dùng với by + Đại từ phản
      //                    thân</span></span></p>

      //              <p><span style="color:#000000"><span style="font-size:16px">+ Để chỉ ngĩa tự lực, không cần sự giúp
      //                    đỡ của ai hết</span></span></p>

      //              <p><span style="color:#000000"><span style="font-size:16px">+ Để chỉ nghĩa một mình</span></span>
      //              </p>
      //            </td>
      //            <td>
      //              <p>&nbsp;</p>

      //              <p><span style="color:#000000"><span style="font-size:16px">+The little girl can walk by
      //                    herself&nbsp;</span></span><br>
      //                <span style="color:#008000"><span style="font-size:16px">(&nbsp;Cô bé có thể đi bộ một
      //                    mình)</span></span>
      //              </p>

      //              <p><span style="color:#000000"><span style="font-size:16px">+ Do you live by
      //                    herself&nbsp;</span></span><br>
      //                <span style="color:#008000"><span style="font-size:16px">(Bạn sống một mình?)</span></span>
      //              </p>
      //            </td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p style="text-align:center"><span style="color:#000000"><span
      //            style="font-size:20px"><strong>-----</strong></span></span></p>


      //    </div>`
      //   }
      // )
      // await newGrammarPart8.save()
      // const newGrammarPart9 = GrammarPartModel(
      //   {
      //     name:"Verbs: Trạng từ",
      //      content: ` <div class="last-content">

      //      <p><span style="color:#0099ff"><span style="font-size:16px"><strong>I. TRẠNG TỪ TRONG TIẾNG ANH LÀ
      //              GÌ?</strong></span></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px"><strong>Trạng từ trong tiếng Anh</strong>&nbsp;(hay còn gọi là phó từ -
      //              adverb) là những từ dùng để bổ nghĩa cho động từ, tính từ, các trạng từ khác hay cả
      //              câu.</span></span></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">Eg:&nbsp;</span></span></span></p>

      //      <ul>
      //        <li><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                style="font-size:16px"><em>She looks <u><strong>very</strong></u>
      //                  <u><strong>beautiful</strong></u>. </em></span></span><span style="color:#008000"><span
      //                style="font-size:16px"><em>(Cô ấy trông rất đẹp.)&nbsp;</em></span></span></span></li>
      //      </ul>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">=&gt; Ta thấy "Very", đứng trước tính từ "Beautiful" để bổ nghĩa cho trạng từ
      //              này.</span></span></span></p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">He runs <u><strong>quite</strong></u> <u><strong>quickly</strong></u>.
      //                </span></span><span style="color:#008000"><span style="font-size:16px">(Anh ấy chạy khá
      //                  nhanh.)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">=&gt; &nbsp;“Quite” và “quickly” đều là trạng từ. Trong đó “quickly” là trạng
      //              từ bổ nghĩa cho động từ “run” (chạy như thế nào --&gt; chạy nhanh), và “quite” là trạng từ bổ nghĩa
      //              cho trạng từ “quickly” (nhanh như thế nào -&gt; khá nhanh).</span></span></span></p>

      //      <p><span style="color:#0099ff"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="font-size:16px"><strong>II. CÁC LOẠI TRẠNG TỪ TRONG TIẾNG ANH</strong></span></span></span>
      //      </p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#ff8c00"><span
      //              style="font-size:16px"><strong>1.Trạng từ chỉ cách thức (adverbs of
      //                manner):</strong></span></span><span style="color:#000000"><span
      //              style="font-size:16px"><strong>&nbsp;</strong>Trạng từ chỉ cách thức cho biết sự việc xảy ra hoặc
      //              được thực hiện như thế nào: Slowly (một cách chậm chạp), Angrily (một cách giận dữ), Interestingly
      //              (một cách thú vị),… Thường được dùng để trả lời các câu hỏi HOW?</span></span></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">Eg:&nbsp;</span></span></span></p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">My brother looked at me <u><strong>anrily</strong></u>.
      //                </span></span><span style="color:#008000"><span style="font-size:16px">(Anh trai tôi nhìn tôi một
      //                  cách giận dữ.)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">=&gt; Trong đó “angrily” là trạng từ chỉ cách thức bổ nghĩa cho cụm động từ
      //              “looked at me”(nhìn tôi như thế nào-&gt; nhìn tôi một cách giận dữ.)</span></span></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#ff8c00"><span
      //              style="font-size:16px"><strong>2.Trạng từ chỉ nơi chốn (adverbs of
      //                place):</strong></span></span><span style="color:#000000"><span style="font-size:16px"> Trạng từ
      //              chỉ đại điểm, nơi chốn xảy ra hành động, hoạt động: here (ở đây), there (ở đó), …Dùng để trả lời câu
      //              hỏi WHERE?</span></span></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">Eg:</span></span></span></p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">I have lived <u><strong>here</strong></u> for a long time.
      //                </span></span><span style="color:#008000"><span style="font-size:16px">(Tôi sống ở đây lâu
      //                  rồi.)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">=&gt; Trong đó “here” là trạng từ chỉ nơi chốn, chỉ ra địa điểm xảy ra hoạt
      //              động “sống” (sống ở đâu -&gt; sống ở đây.)</span></span></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#ff8c00"><span
      //              style="font-size:16px"><strong>3.Trạng từ chỉ thời gian (adverbs of
      //                time):</strong></span></span><span style="color:#000000"><span style="font-size:16px"> Trạng từ
      //              diễn tả thời gian hành động được thực hiện: Yesterday, last week, last month, …. Thường được sử dụng
      //              để trả lời câu hỏi WHEN?</span></span></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">Eg:</span></span></span></p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">My daughter came home late <u><strong>yesterday</strong></u>.
      //                </span></span><span style="color:#008000"><span style="font-size:16px">(Hôm qua, em gái tôi về nhà
      //                  muộn.)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">=&gt; Trong câu ta thấy “hôm qua” là trạng từ chỉ thời gian, chỉ ra thời điểm
      //              xảy ra việc “về nhà muộn” (Về nhà muộn khi nào -&gt; về nhà muộn hôm qua.)</span></span></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#ff8c00"><span
      //              style="font-size:16px"><strong>4.Trạng từ chỉ tần suất (adverbs of
      //                frequency):</strong></span></span><span style="color:#000000"><span style="font-size:16px"> Chỉ
      //              tuần suất xảy ra hành động, hoạt động như: Always (luôn luôn), Usually (thường thường), Often
      //              (thường), Sometimes (thỉnh thoảng), Seldom (hiếm khí), Rarely (hiếm khi), Never (không bao giờ)…
      //              thường dùng để trả lời câu hỏi HOW OFTEN?&nbsp;</span></span></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">Eg:</span></span></span></p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">I <u><strong>seldom</strong></u> cook meals. </span></span><span
      //                style="color:#008000"><span style="font-size:16px">(Tôi hiếm khi nấu
      //                  ăn.)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">=&gt; Trong đó trạng từ “seldom” chỉ tần suất của hoạt động “nấu
      //              ăn”.</span></span></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#ff8c00"><span
      //              style="font-size:16px">5. <strong>Trạng từ chỉ mức độ (adverbs of degree): Trạng từ chỉ mức độ hay
      //                quy mô của hành động:</strong></span></span><span style="color:#000000"><span
      //              style="font-size:16px"> Completely/ absolutely (hoàn toàn, một cách hoàn chỉnh), Extremely (vô
      //              cùng..), Very (rất), Quite (khá), Fairly (tương đối), A little/ a bit (một chút), Hardly (hầu như
      //              không), ...</span></span></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">Eg:&nbsp;</span></span></span></p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">I have finished my work <u><strong>completely</strong></u>.
      //                </span></span><span style="color:#008000"><span style="font-size:16px">(Tôi đã hoàn thành công
      //                  việc một cách hoàn chỉnh)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">=&gt; Chúng ta thấy trạng từ “completely” chỉ mức độ hoàn thành công việc là
      //              100%.</span></span></span></p>

      //      <p><span style="color:#0099ff"><span style="font-family:arial,helvetica,sans-serif"><span
      //              style="font-size:16px"><strong>III. VÍ TRÍ CỦA TRẠNG TỪ TRONG CÂU</strong></span></span></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">Như chúng ta đã biết, Trạng từ có thể đứng đầu câu, đứng giữa câu hoặc đứng
      //              cuối câu.</span></span></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">Eg:</span></span></span></p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px"><u><strong>Last month</strong></u> I went to Ho Chi Minh city to visit my
      //                  friends. </span></span><span style="color:#008000"><span style="font-size:16px">(tháng trước tôi
      //                  tới thành phố Hồ Chi Minh để thăm các bạn của tôi.)</span></span></span></em></li>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">He <u><strong>often</strong></u> goes to school at 7.15 a.m.
      //                </span></span><span style="color:#008000"><span style="font-size:16px">(Anh ấy thường đi học vào
      //                  lúc 7 giờ 15 phút.)</span></span></span></em></li>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">My family went to Da Lat <strong><u>yesterday</u></strong>.
      //                </span></span><span style="color:#008000"><span style="font-size:16px">(Gia đình tôi tới Đà Lạt
      //                  ngày hôm qua.)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="color:#ff8c00"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="font-size:16px">1. Vị trí của trạng từ chỉ cách thức trong
      //                câu:</span></span></strong></span></p>

      //      <p><span style="color:#000000"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="font-size:16px">- Đứng trước hoặc đứng sau động từ/ cụm động từ mà nó bổ
      //                nghĩa.</span></span></strong></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">Eg:</span></span></span></p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">She finished his examination <u><strong>quickly</strong></u>.
      //                </span></span><span style="color:#008000"><span style="font-size:16px">(Cô ấy hoàn thành bài thi
      //                  một cách nhanh chóng.)</span></span></span></em></li>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">She <u><strong>quickly</strong></u> finished his
      //                  examination.</span></span><span style="color:#008000"><span style="font-size:16px"> (Cô ấy hoàn
      //                  thành bài thi một cách nhanh chóng.)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">=&gt; Qua 2 ví dụ, ta thấy &nbsp;trạng từ chỉ cách thức “quickly” được dùng
      //              để bổ nghĩa cho cụm động từ “finished his examination” và nó có thể đứng trước hoặc đứng sau cụm từ
      //              mà nó bổ nghĩa.</span></span></span></p>

      //      <p><span style="color:#000000"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="font-size:16px">- Đứng giữa trợ động từ và động từ chính.</span></span></strong></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">Eg:</span></span></span></p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">She is <u><strong>tiredly</strong></u> waiting for
      //                  him.</span></span><span style="color:#008000"><span style="font-size:16px"> (Cô ấy đang chờ đợi
      //                  anh ấy một cách mệt mỏi.)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">=&gt; Trong câu này, ta thấy trạng từ chỉ cách thức “tiredly” đứng giữa trợ
      //              động từ “to be” và động từ chính “waiting”.</span></span></span></p>

      //      <p><span style="color:#ff8c00"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="font-size:16px">2. Vị trí của trạng từ chỉ nơi chốn trong
      //                câu:</span></span></strong></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px"><strong>- Thường đứng ở vị trí cuối câu:</strong><br>
      //              Eg:</span></span></span></p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">There are a lot of delicious food <u><strong>in
      //                      Hue</strong></u>.</span></span><span style="color:#008000"><span style="font-size:16px"> (Ở
      //                  Huế có nhiều món ăn ngon.)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px"><strong>- Có thể đứng đầu câu nhưng không thông dụng, thường chỉ dùng khi
      //                muốn nhấn mạnh địa điểm.</strong><br>
      //              Eg:&nbsp;</span></span></span></p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px"><u><strong>In Vung Tau</strong></u>, the beaches are
      //                  beautiful.</span></span><span style="color:#008000"><span style="font-size:16px"> (Ở Vũng Tàu,
      //                  các bãi biển rất đẹp.)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="color:#ff8c00"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="font-size:16px">3. Vị trí của trạng từ chỉ thời gian trong
      //                câu:</span></span></strong></span></p>

      //      <p><span style="color:#000000"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="font-size:16px">- Thường được đặt ở cuối câu.</span></span></strong></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">Eg:</span></span></span></p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">I forgot to do my homework <u><strong>last night</strong></u>.
      //                </span></span><span style="color:#008000"><span style="font-size:16px">(Tôi quên làm bài tập về
      //                  nhà tối hôm qua.)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="color:#000000"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="font-size:16px">- Đứng đầu câu khi muốn nhấn mạnh thời gian xảy ra hành động, hoạt
      //                động.</span></span></strong></span></p>

      //      <p>Example:</p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px"><u><strong>Yesterday</strong></u> I saw my sister on the street.
      //                </span></span><span style="color:#008000"><span style="font-size:16px">(Hôm qua tôi gặp chị tôi
      //                  trên đường.)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="color:#ff8c00"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="font-size:16px">4. Vị trí của trạng từ chỉ tần suất trong
      //                câu:</span></span></strong></span></p>

      //      <p><strong><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                style="font-size:16px">- Đứng trước động từ chính:</span></span></span></strong></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">Eg:</span></span></span></p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">My brother <u><strong>usually</strong></u> gets up early.
      //                </span></span><span style="color:#008000"><span style="font-size:16px">(Anh tôi thường dậy
      //                  sớm.)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">=&gt; Trong đó, trạng từ chỉ tần suất “usually” đứng trước động từ thường
      //              “get”.</span></span></span></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px"><strong>- Đứng sau trợ động từ:</strong><br>
      //              Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                style="font-size:16px"><em>I don't <u><strong>often</strong></u> go to the
      //                  zoo.</em></span></span><span style="color:#008000"><span style="font-size:16px"><em> (Tôi không
      //                  thường đi đến sở thú.)</em></span></span></span></li>
      //      </ul>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">=&gt; Trong đó trạng từ chỉ tần suất “often” đứng trước động từ chính “go” và
      //              đứng sau trợ động từ “don't”.</span></span></span></p>

      //      <p><strong><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                style="font-size:16px">- Đứng sau động từ “to be”:</span></span></span></strong></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">Eg:&nbsp;</span></span></span></p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">He is <u><strong>always</strong></u> late for school. </span></span><span
      //                style="color:#008000"><span style="font-size:16px">(Anh ấy toàn đi học
      //                  muộn.)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">=&gt; Trong câu này trạng từ chỉ tần suất “always” đứng sau động từ “to
      //              be”.</span></span></span></p>

      //      <p><span style="color:#ff8c00"><strong><span style="font-family:arial,helvetica,sans-serif"><span
      //                style="font-size:16px">5. Vị trí của trạng từ chỉ mức độ trong câu:</span></span></strong></span>
      //      </p>

      //      <p><strong><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                style="font-size:16px">- Đứng trước động từ thường:</span></span></span></strong></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">Eg:</span></span></span></p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">He <u><strong>absolutely</strong></u> believes in her.
      //                </span></span><span style="color:#008000"><span style="font-size:16px">(Anh ấy hoàn toàn tin tưởng
      //                  cô ta.)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">=&gt; Ta thấy trạng từ chỉ mức độ “absolutely” đứng trước động từ
      //              “believes”.</span></span></span></p>

      //      <p><strong><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                style="font-size:16px">- Đứng sau trợ động từ và sau động từ chính:</span></span></span></strong>
      //      </p>

      //      <ul>
      //        <li><em><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                  style="font-size:16px">He doesn't <u><strong>absolutely</strong></u> believes in
      //                  her.</span></span><span style="color:#008000"><span style="font-size:16px">(Anh ấy không hoàn
      //                  toàn tin tưởng cô ta.)</span></span></span></em></li>
      //      </ul>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">=&gt; Trong đó, trạng từ chỉ mức độ đứng sau trợ động từ “doesn't” và đứng
      //              trước động từ chính “believes”.</span></span></span></p>

      //      <p><strong><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                style="font-size:16px">- Đứng trước tính từ:</span></span></span></strong></p>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">Eg:</span></span></span></p>

      //      <ul>
      //        <li><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //                style="font-size:16px"><em>&nbsp;She is <u><strong>very</strong></u> intelligent.
      //                </em></span></span><span style="color:#008000"><span style="font-size:16px"><em>(Cô ấy rất thông
      //                  minh.)</em></span></span></span></li>
      //      </ul>

      //      <p><span style="font-family:arial,helvetica,sans-serif"><span style="color:#000000"><span
      //              style="font-size:16px">=&gt; Trạng từ chỉ mức độ “very” đứng trước tính từ
      //              “intelligent”.</span></span></span></p>

      //      <p style="text-align:center"><span style="color:#000000"><span
      //            style="font-size:16px"><strong>-----</strong></span></span></p>

      //    </div>`
      //   }
      // )
      // await newGrammarPart9.save()
      // const newGrammarPart10 = GrammarPartModel(
      //   {
      //     name:"Adjective: Giới từ",
      //      content: `  <div class="last-content">

      //      <p><span style="font-size:14px"><span style="color:#0099ff"><strong>I. ĐỊNH NGHĨA VỀ GIỚI TỪ TRONG TIẾNG
      //              ANH</strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>Giới từ</strong> (Preposition) là từ
      //            loại chỉ sự liên quan giữa các từ loại trong cụm từ, trong câu. Những từ thường đi sau giới từ là tân
      //            ngữ (Object), Verb + ing, Cụm danh từ ... </span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Eg:</span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">I went <u><strong>into</strong></u> the
      //                room.</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">I was sitting <u><strong>in</strong></u>
      //                the room at that time.</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000">Ta thấy rõ, ở ví dụ a., "the room" là tân ngữ
      //            của giới từ "into". Ở ví dụ b., "the room" là tân ngữ của giới từ "in".</span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000"><strong>Lưu ý</strong>: Các bạn phải luôn phân
      //            biệt trạng từ (adverb) và giới từ, vì thường khi một từ có hai chức năng đó (vừa là trạng từ và giới
      //            từ). Điều khác nhau cơ bản là Trạng từ thì không có tân ngữ theo sau.</span></span><br>
      //        &nbsp;</p>




      //      <p><span style="font-size:14px"><span style="color:#0099ff"><strong>II. VỊ TRÍ CỦA GIỚI TỪ TRONG TIẾNG
      //              ANH</strong></span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Vị
      //                    Trí</strong></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Ví
      //                    dụ</strong></span></span></td>
      //          </tr>
      //          <tr>
      //            <td><span style="font-size:14px"><span style="color:#000000">- Sau TO BE, trước danh từ</span></span>
      //            </td>
      //            <td>
      //              <ul>
      //                <li><span style="font-size:14px"><em><span style="color:#000000">The book is on the
      //                        table.</span><br>
      //                      <span style="color:#008000">(Quyển sách ở trên bàn.)</span></em></span></li>
      //                <li><span style="font-size:14px"><span style="color:#000000"><em>I will study in Australia for 2
      //                        years.</em></span><br>
      //                    <span style="color:#008000"><em>(Tôi sẽ học ở Úc trong 2 năm.)</em></span></span></li>
      //              </ul>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td><span style="font-size:14px"><span style="color:#000000">- Sau động từ: Có thể liền sau động từ,
      //                  có thể bị 1 từ khác chen giữa động từ và giới từ.</span></span></td>
      //            <td>
      //              <ul>
      //                <li><span style="font-size:14px"><em><span style="color:#000000">I live in Ho Chi Minh city.
      //                      </span><br>
      //                      <span style="color:#008000">(Tôi sống ở thành phố Hồ Chí Minh.)</span></em></span></li>
      //                <li><span style="font-size:14px"><em><span style="color:#000000">Take off your hat! </span><span
      //                        style="color:#008000">(Cởi nón của bạn ra!)</span></em></span></li>
      //                <li><span style="font-size:14px"><span style="color:#000000"><em>I have an air-conditioner, but i
      //                        only turn it on in summer </em></span><br>
      //                    <span style="color:#008000"><em>(Tôi có máy lạnh, nhưng tôi chỉ bật nó lên vào mùa
      //                        hè.)</em></span></span></li>
      //              </ul>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td><span style="font-size:14px"><span style="color:#000000">- Sau tính từ:</span></span></td>
      //            <td>
      //              <ul>
      //                <li><span style="font-size:14px"><em><span style="color:#000000">I'm not worried about living in a
      //                        foreign country. </span><br>
      //                      <span style="color:#008000">(Tôi không lo lắng về việc sống ở nước
      //                        ngoài.)</span></em></span></li>
      //                <li><span style="font-size:14px"><span style="color:#000000"><em>He is not angry with you.
      //                      </em></span><br>
      //                    <span style="color:#008000"><em>(Anh ấy không giận bạn.)</em></span></span></li>
      //              </ul>
      //            </td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p>&nbsp;</p>



      //      <p><span style="font-size:14px"><span style="color:#0099ff"><strong>III. CÁCH DÙNG CÁC LOẠI GIỚI TỪ TRONG
      //              TIẾNG ANH</strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Trong tiếng Anh, người ta không thể đặt ra các
      //            quy luật về các phép dùng giới từ mang tính cố định cho mỗi giới từ đó - cùng một giới từ, khi đi với
      //            từ loại khác nhau thì tạo ra nghĩa khác nhau. Vậy chúng ta nên học thuộc mỗi khi gặp phải và học ngay
      //            từ lúc ban đầu.</span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#66cc00"><strong>1. Giới từ chỉ nơi
      //              chốn</strong></span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:100%">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Giới
      //                    từ</strong></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Cách
      //                    dùng</strong></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Ví
      //                    dụ</strong></span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="color:#000000"><strong>&nbsp;At</strong><br>
      //                  <em>(ở , tại)</em></span></span></td>
      //            <td>
      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;Chỉ một địa điểm cụ
      //                    thể</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;Dùng trước tên một tòa nhà khi ta
      //                    đề cập tới hoạt động / sự kiện thường xuyên diễn ra trong đó</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;Chỉ nơi làm việc, học
      //                    tập</span></span></p>
      //            </td>
      //            <td>
      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;At home, at the station, at the
      //                    airport …</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;At the cinema, …</span></span>
      //              </p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;At work , at school, at college
      //                    …</span></span></p>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td>
      //              <p style="text-align:center"><span style="font-size:14px"><strong><span style="color:#000000">&nbsp;
      //                      In</span></strong><br>
      //                  <em><span style="color:#000000">(Trong,</span></em></span></p>

      //              <p style="text-align:center"><span style="font-size:14px"><em><span style="color:#000000">ở
      //                      trong)</span></em></span></p>
      //            </td>
      //            <td>
      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;Vị trí bên trong 1 diện tích hay
      //                    một không gian 3 chiều</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;Dùng trước tên làng, thị trấn,
      //                    thành phố, đất nước</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;Dùng với phương tiện đi lại bằng
      //                    xe hơi / taxi</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">- Dùng chỉ phương hướng và một số cụm từ
      //                    chỉ nơi chốn</span></span></p>
      //            </td>
      //            <td>
      //              <p><span style="font-size:14px"><span style="color:#000000">- In the room, in the building, in the
      //                    park …</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;In France, in Paris,
      //                    …</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;In a car, in a taxi</span></span>
      //              </p>

      //              <p><span style="font-size:14px"><span style="color:#000000">- In the South, in the
      //                    North,</span></span></p>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span
      //                  style="color:#000000"><strong>On</strong><br>
      //                  <em>(Trên, ở trên)</em></span></span></td>
      //            <td>
      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;Chỉ vị trí trên bề
      //                    mặt</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;Chỉ nơi chốn hoặc số tầng
      //                    (nhà)</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;Phương tiện đi lại công cộng/ cá
      //                    nhân</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;Dùng trong cụm từ chỉ vị
      //                    trí</span></span></p>
      //            </td>
      //            <td>
      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;On the table, on the wall
      //                    …</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;On the floor, on the farm,
      //                    …</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;On a bus, an a plan, on a
      //                    bicycle…</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;On the left, on the
      //                    right...</span></span></p>
      //            </td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><span style="font-size:14px"><span style="color:#ff8c00"><strong>Một số giới từ trong tiếng anh chỉ nơi
      //              chốn khác:</strong></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>Above</strong> (cao hơn, trên),
      //                <strong>Below</strong> (thấp hơn, dưới)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>Over</strong> (ngay trên),
      //                <strong>Under</strong> (dưới, ngay dưới)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>Inside - Outside</strong> (bên
      //                trong - bên ngoài)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>In Front Of</strong> (phía
      //                trước),&nbsp;<strong>Behind</strong> (phía sau)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>Near</strong> (gần - khoảng cách
      //                ngắn)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>By, Beside, Next To</strong> (bên
      //                cạnh)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>Between</strong> (ở giữa 2 người/
      //                vật),&nbsp;<strong>Among</strong> (ở giữa một đám đông hoặc nhóm người/ vật)</span></em></span>
      //        </li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000">Với mỗi cặp giới từ, bạn hãy đặt một cặp câu để
      //            so sánh và ghi nhớ các sử dụng nó nhé!</span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#66cc00"><strong>2. Giới từ chỉ thời
      //              gian</strong></span></span></p>

      //      <table border="1" cellpadding="1" cellspacing="1" style="width:704px">
      //        <tbody>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Giới
      //                    từ</strong></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Cách
      //                    dùng</strong></span></span></td>
      //            <td style="text-align:center"><span style="font-size:14px"><span style="color:#ff8c00"><strong>Ví
      //                    dụ</strong></span></span></td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><strong><span style="color:#000000">At<br>
      //                    Vào lúc</span></strong></span></td>
      //            <td>
      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;Chỉ thời điểm</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;Nói về những kì nghỉ (toàn bộ một
      //                    kì nghỉ)</span></span></p>
      //            </td>
      //            <td>
      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;At 5pm, at midnight, at
      //                    noon,…</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;At the weekend, at Christmas,
      //                    …</span></span></p>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td>
      //              <p style="text-align:center"><span style="font-size:14px"><span style="color:#000000"><strong>In<br>
      //                      Trong</strong>,</span></span></p>
      //            </td>
      //            <td>
      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;Chỉ một khoảng thời gian dài :
      //                    tháng, mùa, năm&nbsp;</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;Chỉ một kì nghỉ cụ thể, một khóa
      //                    học và các buổi trong ngày</span></span></p>
      //            </td>
      //            <td>
      //              <p><span style="font-size:14px"><span style="color:#000000">- In September, in 1995, in the 1990s
      //                    ,…</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;In the morning, in the
      //                    afternoon,…</span></span></p>
      //            </td>
      //          </tr>
      //          <tr>
      //            <td style="text-align:center"><span style="font-size:14px"><strong><span style="color:#000000">On<br>
      //                    (vào)</span></strong></span></td>
      //            <td>
      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;Chỉ ngày trong tuần hoặc ngày
      //                    tháng trong năm</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;Chỉ một ngày trong kì nghỉ hoặc
      //                    các buổi trong 1 ngày cụ thể</span></span></p>
      //            </td>
      //            <td>
      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;On Monday, on Tuesday ,…On 30th
      //                    Octorber…</span></span></p>

      //              <p><span style="font-size:14px"><span style="color:#000000">-&nbsp;On Chrismas Day, On Sunday
      //                    mornings …</span></span></p>
      //            </td>
      //          </tr>
      //        </tbody>
      //      </table>

      //      <p><span style="font-size:14px"><span style="color:#ff8c00"><strong>Một số giới từ trong tiếng anh chỉ thời
      //              gian khác:</strong></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>During</strong> (trong suốt một
      //                khoảng thời gian)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>For</strong> (trong khoảng thời
      //                gian hành động hoặc sự việc xảy ra)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>Since</strong> (từ, từ
      //                khi)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>From </strong>…
      //                <strong>To</strong> (từ … đến …)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>By</strong> (trước/ vào một thời
      //                điểm nào đó)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>Until/ Till</strong> (đến, cho
      //                đến)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>Before</strong> (trước)
      //                <strong>After</strong> (sau)</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000">Với mỗi giới từ, bạn hãy đặt một câu để ghi nhớ
      //            các sử dụng nó nhé!</span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#66cc00"><strong>3. Giới từ chỉ phương hướng, chuyển
      //              động</strong></span></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>To</strong> (đến, tới một nơi nào
      //                đó)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>From</strong> (từ một nơi nào
      //                đó)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>Across</strong> (qua, ngang
      //                qua)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>Along</strong> (dọc
      //                theo)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>About</strong> (quanh quẩn, đây
      //                đó)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>Into</strong> (vào trong) - Out
      //                of (ra khỏi)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>Up </strong>(lên) - Down
      //                (xuống)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>Through</strong> (qua, xuyên
      //                qua)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>Towards</strong> (về
      //                phía)</span></em></span></li>
      //        <li><span style="font-size:14px"><em><span style="color:#000000"><strong>Round</strong> (quanh, vòng
      //                quanh)</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><span style="color:#000000">Với mỗi giới từ trong tiếng Anh, bạn hãy đặt một
      //            câu để ghi nhớ các sử dụng nó nhé!</span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#66cc00"><strong>4. Các loại giới từ trong tiếng Anh
      //              khác</strong></span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#000000">Ngoài các giới từ chính đã được liệt kê ở trên,
      //            các giới từ và cụm giới từ sau đây được dùng để diễn tả:</span></span></p>

      //      <p><span style="font-size:14px"><span style="color:#ff8c00"><strong>Mục đích hoặc chức năng: for, to, in
      //              order to, so as to (để)</strong></span></span></p>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000">- For +
      //              V-ing/Noun</span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg: We stopped for a rest </span><span
      //                style="color:#008000">(Chúng tôi dừng lại để nghỉ ngơi)</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000">- To/In order to/ So as to + V-bare
      //              infinitive</span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg: I went out to/in order to/so as to
      //                post a letter </span><span style="color:#008000">(Tôi ra ngoài để gửi thư)</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000">- Nguyên nhân: for, because of, owning
      //              to + Ving/Noun (vì, bởi vì)</span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg: We didn't go out because of the rain
      //              </span><span style="color:#008000">(Vì trời mưa nên chúng tôi không đi chơi)</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000">- Tác nhân hay phương tiện: by (bằng,
      //              bởi), with (bằng)</span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg:&nbsp;I go to school by bus
      //              </span><span style="color:#008000">(Tôi tới trường bằng xe buýt)</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000">- Sự đo lường, số lượng: by (theo,
      //              khoảng)</span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg: They sell eggs by the dozen
      //              </span><span style="color:#008000">(Họ bán trứng theo tá)</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000">- Sự tương tự: like
      //              (giống)</span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg: She looks a bit like Queen Victoria
      //              </span><span style="color:#008000">(Trông bà ấy hơi giống nữ hoàng Victoria)</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000">- Sự liên hệ hoặc đồng hành: with (cùng
      //              với)</span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg: She lives with her uncle and aunt
      //              </span><span style="color:#008000">(Cô ấy sống cùng với chú thím)</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000">- Sự sở hữu: with (có), of
      //              (của)</span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg: We need a computer with a huge memory
      //              </span><span style="color:#008000">(Chúng tôi cần một máy tính có bộ nhớ thật
      //                lớn)</span></em></span></li>
      //      </ul>

      //      <p><span style="font-size:14px"><strong><span style="color:#000000">- Cách thức: by (bằng cách), with (với,
      //              bằng), without (không), in (bằng)</span></strong></span></p>

      //      <ul>
      //        <li><span style="font-size:14px"><em><span style="color:#000000">Eg: The thief got in by breaking a window
      //              </span><span style="color:#008000">(Tên trộm vào nhà bằng cách đập cửa sổ)</span></em></span></li>
      //      </ul>

      //      <p style="text-align:center"><span style="font-size:14px"><span
      //            style="color:#000000"><strong>-----</strong></span></span></p>


      //    </div>`
      //   }
      // )
      // await newGrammarPart10.save()

      // const newGrammarTopic = GrammarTopicModel({
      //   name: "Tense - Các thì hay xuất hiện trong bài thi TOEIC",
      //   list_part: [newGrammarPart, newGrammarPart2, newGrammarPart3, newGrammarPart4] 
      // })
      // await newGrammarTopic.save()	

      // const newGrammarTopic2 = GrammarTopicModel({
      //   name: "Gerund and infinitive - Các dạng thức của động từ",
      //   list_part: [newGrammarPart5] 
      // })
      // await newGrammarTopic2.save()	
      
      // const newGrammarTopic3 = GrammarTopicModel({
      //   name: "Modal verbs - Động từ khiếm khuyết",
      //   list_part: [newGrammarPart6] 
      // })
      // await newGrammarTopic3.save()	


      // const newGrammarTopic4 = GrammarTopicModel({
      //   name: "Types of Words - Từ loại",
      //   list_part: [newGrammarPart7, newGrammarPart8, newGrammarPart9, newGrammarPart10] 
      // })
      // await newGrammarTopic4.save()	

      // const newGrammarTopic5 = GrammarTopicModel({
      //   name: "Comparison - So sánh trong Tiếng Anh",
      //   list_part: [] 
      // })
      // await newGrammarTopic5.save()	

      // const newGrammarTopic6 = GrammarTopicModel({
      //   name: "Passive Voice - Bị động",
      //   list_part: [] 
      // })
      // await newGrammarTopic6.save()	
     

      // await GrammarPartModel.deleteMany()
      // await GrammarTopicModel.deleteMany()
      // --------------------------------
      const AllGrammarTopic = await GrammarTopicModel.find()
      res.status(200).json(AllGrammarTopic)
    }
    catch(err) {
      res.status(500).json({err: err})
    }
  }

export const findGrammarTopic = async(req,res) => {
    try {
      const GrammarTopic = await GrammarTopicModel.find({_id: req.params.id}).populate("list_part")
      res.status(200).json(GrammarTopic)
    }
    catch(err) {
      res.status(500).json({err: err})
    }
  }
