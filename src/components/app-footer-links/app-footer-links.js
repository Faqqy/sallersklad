import React, { useRef } from 'react';
import './app-footer-links.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import closeImg from './close-btn.png';



function FooterLinks() {

    const ref = useRef();
    const closeTooltip = () => ref.current.close();
    
    function OpenModalAbout() {
        const openInfoModal = document.querySelector('.textOpen');
        if (openInfoModal.getAttribute("show") === "true"){
            openInfoModal.setAttribute("show","false");
        } else {
            openInfoModal.setAttribute("show","true");
        }

        openInfoModal.addEventListener('click', e => {
            if (e.target.className !== openInfoModal) {
                openInfoModal.setAttribute("show","false");
            }
        });
    };

    return (
        <div className='aboutLinks d-flex'>

            <Popup ref={ref} trigger={
                <a className='aboutLink'>
                    Согласие на обработку персональных данных
                </a>
                }                                    
                modal
                closeOnDocumentClick
                lockScroll
                >
                <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>
                <h4>
                    Согласие на обработку персональных данных
                </h4>
                <p>
                Я, субъект персональных данных, в соответствии с Федеральным законом от 27 июля 2006 года № 152 «О персональных данных» предоставляю ООО «РУСМАКЛЕР» (далее – Оператор), расположенному по адресу 127410, г. Москва, вн. тер. г. Муниципальный Округ Алтуфьевский, проезд Путевой, д. 13, стр. 4 согласие на обработку персональных данных, указанных мной в форме заказа обратного звонка на сайте в сети «Интернет», владельцем которого является Оператор, а также согласие на обработку Технической информация, автоматически собираемой программным обеспечением Сайта во время его посещения.
                </p>
                <ol>
                    <li>Состав предоставляемых мной персональных данных является следующим: Имя, номер контактного телефона или другая дополнительная информация.</li>
                    <li>Целями обработки моих персональных данных являются: обеспечение функционирования обратного звонка и информирование Пользователя об оказываемых услугах посредством обратного звонка.</li>
                    <li>Согласие предоставляется на совершение следующих действий (операций) с указанными в настоящем согласии персональными данными: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, передачу (предоставление, доступ), блокирование, удаление, уничтожение, осуществляемых как с использованием средств автоматизации (автоматизированная обработка), так и без использования таких средств (неавтоматизированная обработка).</li>
                    <li>Я понимаю и соглашаюсь с тем, что предоставление Оператору какой-либо информации о себе, не являющейся контактной и не относящейся к целям настоящего согласия, а равно предоставление информации, относящейся к государственной, банковской и/или коммерческой тайне, информации о расовой и/или национальной принадлежности, политических взглядах, религиозных или философских убеждениях, состоянии здоровья, интимной жизни запрещено.</li>
                    <li>В случае принятия мной решения о предоставлении Оператору какой-либо информации (каких-либо данных), я обязуюсь предоставлять исключительно достоверную и актуальную информацию и не вправе вводить Оператора в заблуждение в отношении своей личности, сообщать ложную или недостоверную информацию о себе.</li>
                    <li>Я понимаю и соглашаюсь с тем, что Оператор не проверяет достоверность персональных данных, предоставляемых мной, и не имеет возможности оценивать мою дееспособность и исходит из того, что я предоставляю достоверные персональные данные и поддерживаю такие данные в актуальном состоянии.</li>
                    <li>Согласие действует по достижении целей обработки или в случае утраты необходимости в достижении этих целей, если иное не предусмотрено федеральным законом.</li>
                    <li>Согласие может быть отозвано мною в любое время на основании моего письменного заявления.</li>
                </ol>
            </Popup>

            <Popup ref={ref} trigger={
                <a className='aboutLink'>
                    Политика конфиденциальности
                </a>
                }                                    
                modal
                closeOnDocumentClick
                lockScroll
                >
                <span className='close'><img src={ closeImg } onClick={closeTooltip} alt="Закрыть окно" /></span>  
                <h4>
                    Политика конфиденциальности
                </h4>   
                <p>
                <b>1. Общие положения</b>
                    <br />
                    Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые ООО «РУСМАКЛЕР» (далее – Оператор).
                    <br />
                    1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
                    <br />
                    1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта https://seller-sklad.ru/. 
                    <br />
                <b>2. Основные понятия, используемые в Политике</b>
                <br />
                    2.1. Автоматизированная обработка персональных данных — обработка персональных данных с помощью средств вычислительной техники. 2.2. Блокирование персональных данных — временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).
                    <br />
                    2.3. Веб-сайт — совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу https://seller-sklad.ru/. 
                    <br />
                    2.4. Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных и обеспечивающих их обработку информационных технологий и технических средств.
                    <br />
                    2.5. Обезличивание персональных данных — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных.
                    <br />
                    2.6. Обработка персональных данных — любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.
                    <br />
                    2.7. Оператор — государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и/или осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.
                    <br />
                    2.8. Персональные данные — любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта https://seller-sklad.ru/.
                    <br />
                    2.9. Персональные данные, разрешенные субъектом персональных данных для распространения, — персональные данные, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных путем дачи согласия на обработку персональных данных, разрешенных субъектом персональных данных для распространения в порядке, предусмотренном Законом о персональных данных (далее — персональные данные, разрешенные для распространения).
                    <br />
                    2.10. Пользователь — любой посетитель веб-сайта https://seller-sklad.ru/.
                    <br />
                    2.11. Предоставление персональных данных — действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц.
                    <br />
                    2.12. Распространение персональных данных — любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом.
                    <br />
                    2.13. Трансграничная передача персональных данных — передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу. 
                    <br />
                    2.14. Уничтожение персональных данных — любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и/или уничтожаются материальные носители персональных данных.
                    <br />
                <b>3. Оператор может обрабатывать следующие персональные данные Пользователя</b>
                <br />
                    3.1. Имя;
                    <br />
                    3.2. Номера телефонов;
                    <br />
                    3.3. Другая дополнительная информация.
                    <br />
                    3.4. Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).
                    <br />
                    3.5. Вышеперечисленные данные далее по тексту Политики объединены общим понятием Персональные данные. 
                    <br />
                <b>4. Цели обработки персональных данных</b>
                <br />
                    4.1. Цель обработки персональных данных Пользователя — обеспечение функционирования обратного звонка; информирование Пользователя об оказываемых услугах посредством обратного звонка.
                    <br />
                <b>5. Правовые основания обработки персональных данных</b>
                <br />
                    5.1. Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте https://seller-sklad.ru/. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.
                    <br />
                    5.2. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).
                    <br />
                    5.3. Сайт может содержать ссылки на другие веб-сайты. Мы, в свою очередь, не несем ответственности за политику конфиденциальности данных сайтов.
                    <br />
                <b>6. Порядок сбора, хранения, передачи и других видов обработки персональных данных </b>
                <br />
                    Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.
                    <br />
                    6.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.
                    <br />
                    6.2. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.
                    <br />
                    6.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора inforusmakler@mail.ru с пометкой «Актуализация персональных данных».
                    <br />
                    6.4. Срок обработки персональных данных является неограниченным. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора inforusmakler@mail.ru с пометкой «Отзыв согласия на обработку персональных данных». 
                    <br />
                <b>7. Трансграничная передача персональных данных</b>
                <br />
                    7.1. Оператор до начала осуществления деятельности по трансграничной передаче персональных данных обязан уведомить уполномоченный орган по защите прав субъектов персональных данных о своем намерении осуществлять трансграничную передачу персональных данных (такое уведомление направляется отдельно от уведомления о намерении осуществлять обработку персональных данных).
                    <br />
                    7.2. Оператор до подачи вышеуказанного уведомления, обязан получить от органов власти иностранного государства, иностранных физических лиц, иностранных юридических лиц, которым планируется трансграничная передача персональных данных, соответствующие сведения. 
                    <br />
                <b>8. Заключительные положения </b>
                <br />
                    8.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты inforusmakler@mail.ru.
                    <br />
                    8.2. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.
                    <br />
                    8.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу https://seller-sklad.ru/.
                </p>
            </Popup>

        </div>
    );
}












export default FooterLinks;