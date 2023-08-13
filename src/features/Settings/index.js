import { View, StyleSheet, TouchableOpacity,Text,Image,TextInput,ScrollView} from "react-native";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { actions } from "../../store/actions";
const Settings = (props) =>{
    const [visible,setVisible] = useState(false);
    const [visibleKvkk,setVisibleKvkk] = useState(false);
    const [visibleUser,setVisibleUser] = useState(false);
    const [visibleHow,setVisibleHow] = useState(false);
    const [password,setPassword] = useState('');
    const [passwordAgain,setPasswordAgain] = useState('');
    const [message,setMessage] = useState('');
    const {userCheck} = useSelector(state => state.UserCheck)
    const {changePassword, status} = useSelector(state => state.ChangePassword)
    const dispatch = useDispatch()

    const save = () =>{
        if(password === passwordAgain){
            dispatch(actions.UserChangePassword(userCheck.user_id,password));
        }
        else{
            setMessage('Şifreler uyuşmuyor');
        }
    }

    useEffect(()=>{
        if(status == 'response'){
            props.navigation.navigate("Login")
        }
    },[changePassword])

    return(
        <ScrollView style={styles.Body} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.settingsButton} onPress={()=>setVisible(!visible)}>
                    <Text style={styles.setttingsButtonText}>Şifre Değiştir</Text>
                    {visible ?
                        <Image 
                            style={styles.down}
                            source={require('../../assets/icon/down.png')}
                        />
                        :<Image 
                            style={styles.right}
                            source={require('../../assets/icon/right.png')}
                        />
                    }
                </TouchableOpacity>
                {visible &&
                    <View style={styles.inputRow}>
                        <TextInput style={styles.input} autoCorrect={false} autoCapitalize='none' onChangeText={password => setPassword(password)} secureTextEntry={true} placeholder="Şifre" placeholderTextColor={'#000000'}/>
                        <TextInput style={styles.input} autoCorrect={false} autoCapitalize='none' onChangeText={password => setPasswordAgain(password)} secureTextEntry={true} placeholder="Şifre Tekrar" placeholderTextColor={'#000000'}/>
                        <Text style={{color:'red'}}>{message}</Text>
                        <TouchableOpacity style={styles.saveButton} onPress={()=>save()}>
                            <Text style={styles.saveButtonText}>Kaydet</Text>
                        </TouchableOpacity>                
                    </View>
                }
                <TouchableOpacity style={styles.settingsButton} onPress={()=>setVisibleKvkk(!visibleKvkk)}>
                    <Text style={styles.setttingsButtonText}>KVkk Sözleşmesi</Text>
                    {visibleKvkk ?
                        <Image 
                            style={styles.down}
                            source={require('../../assets/icon/down.png')}
                        />
                        :<Image 
                            style={styles.right}
                            source={require('../../assets/icon/right.png')}
                        />
                    }
                </TouchableOpacity>
                {visibleKvkk &&
                    <View style={styles.inputRow}>
                        <View style={styles.textRow}>
                            <Text>
                                6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, Uygulama Sahibi (Şahıs) tarafından, Veri Sorumlusu sıfatıyla, kişisel verileriniz, iş amaçlarıyla bağlı olarak, aşağıda açıklandığı çerçevede kullanılmak, kaydedilmek, saklanmak, güncellenmek, aktarılmak ve/veya sınıflandırılmak suretiyle işlenecektir.  Bu kapsamda uygulama ve yönetimimiz tarafından başta özel hayatın gizliliği olmak üzere, kişilerin temel hak ve özgürlüklerini korumak ve kişisel verilerin korunması amacıyla düzenlenen Kanun ve Yönetmelikler gereğince uygulama ve yönetimi, kişisel verilerinizin hukuka aykırı olarak işlenmesini önleme, hukuka aykırı olarak erişilmesini önleme ve muhafazasını sağlama amacıyla, uygun güvenlik düzeyini temin etmeye yönelik tüm teknik ve idari tedbirleri almaktadır.
                                Bu metnin hedef kitlesi, Uygulama tarafından kişisel verileri işlenen tüm gerçek kişilerdir.
                                Veri sorumlusu sıfatıyla işlenen kişisel verilere, burada belirtilenlerle sınırlı sayıda olmamak üzere aşağıda yer verilmektedir;
                                Cinsiyet, e-posta, adresi kayıtları
                                
                                Kişisel verilerin işlenme amaçları ve hukuki sebepleri; Tarafınızca paylaşılan kişisel verileriniz;
                                •	Uygulama tarafından sunulan ürün ve hizmetlerden sizleri ve/veya temsil ettiğiniz kurum ve kuruluşları faydalandırmak için, uygulama ve yönetiminin ticari ve iş stratejilerinin belirlenmesi ve uygulanması, pazarlama faaliyetlerinin yapılması, iş geliştirme ve planlama faaliyetlerinin gerçekleştirilmesi dahil ve fakat bunlarla sınırlı olmamak üzere gerekli çalışmaların yürütülmesi,
                                •	Uygulama sahibi tarafından yürütülen iletişime yönelik idari operasyonların yürütülmesi,
                                •	Uygulama ve yönetimi kullanımda olan lokasyonların fiziksel güvenliğinin ve denetiminin sağlanması,
                                •	İş ortağı/müşteri/tedarikçi (yetkili veya çalışanları) ilişkilerinin kurulması,
                                •	İş ortaklarımız, tedarikçilerimiz veya sair üçüncü kişilerle birlikte sunulan ürün ve hizmetlere ilişkin sözleşme gereklerinin ve finansal mutabakatın sağlanması,
                                •	Uygulama ve yönetiminin insan kaynakları politikalarının yürütülmesi,
                                •	Uygulama ve yönetiminin çağrı merkezinin aranması veya internet sayfasının kullanılması
                                ve/veya
                                •	Uygulama ve yönetiminin düzenlediği eğitim, seminer veya organizasyonlara katılım sağlanması amacıyla işlenecektir.
                                Kişisel verilerin toplanma ve saklanma yöntemi; uygulama ve yönetimiyle paylaştığınız kişisel verileriniz, otomatik ya da otomatik olmayan yöntemlerle, ofisler, şubeler, çağrı merkezi, internet sitesi, sosyal medya mecraları, mobil uygulamalar ve benzeri vasıtalarla sözlü, yazılı ya da elektronik olarak toplanabilir. Kişisel verileriniz elektronik ve/veya fiziksel ortamlarda saklanacaktır. Uygulama ve yönetimi tarafından temin edilen ve saklanan kişisel verilerinizin saklandıkları ortamlarda yetkisiz erişime maruz kalmamaları, manipülasyona uğramamaları, kaybolmamaları ve zarar görmemeleri amacıyla gereken iş süreçlerinin tasarımı ile teknik güvenlik altyapı geliştirmeleri uygulanmaktadır.
                                Kişisel verileriniz, size bildirilen amaçlar ve kapsam dışında kullanılmamak kaydı ile gerekli tüm bilgi güvenliği tedbirleri de alınarak işlenecek ve yasal saklama süresince veya böyle bir süre öngörülmemişse işleme amacının gerekli kıldığı süre boyunca saklanacak ve işlenecektir. Bu süre sona erdiğinde, kişisel verileriniz silinme, yok edilme ya da anonimleştirme yöntemleri ile Uygulama ve yönetiminin veri akışlarından çıkarılacaktır.
                                
                                Kişisel Verilerin aktarılması;
                                Kişisel verileriniz, Kanunlar ve sair mevzuat kapsamında ve açıklanan amaçlarla;
                                •	Türk Telekomünikasyon A.Ş. ve Türk Telekomünikasyon grup şirketlerine,
                                •	Yetki vermiş olduğumuz, uygulama ve yönetimimiz nam ve hesabına faaliyette bulunan şirketler, temsilcilerimize,
                                •	Düzenleyici ve denetleyici kurumlara, kişisel verilerinizi tabi olduğu kanunlarında açıkça talep etmeye yetkili olan kamu kurum veya kuruluşlara,
                                •	Belirtilen amaçlar kapsamında iş ortaklıkları, tedarikçi ve yüklenici şirketler, bankalar, kredi risk ve finans kuruluşları ve sair gerçek veya tüzel kişilere,
                                •	Vergi ve benzeri danışmanlara, yasal takip süreçleri ile ilgili zorunlu kişilere, kurum ve kuruluşlara ve denetimciler de dâhil olmak üzere danışmanlık aldığımız üçüncü kişilere ve bunlarla sınırlı olmaksızın, yurt içinde ve yurt dışında, yukarıda belirtilen amaçlarla iş ortakları, hizmet alınan üçüncü kişi, yetkilendirilen kişi ve kuruluşlara aktarılabilecektir.
                                KVKK’nın 11. maddesi gereği haklarınız; Uygulama ve yönetimimize başvurarak, kişisel verilerinizin;
                                1.	İşlenip işlenmediğini öğrenme,
                                2.	İşlenmişse bilgi talep etme,
                                3.	İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,
                                4.	Yurt içinde / yurt dışında aktarıldığı 3. kişileri bilme,
                                5.	Eksik / yanlış işlenmişse düzeltilmesini isteme,
                                6.	KVKK’nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini / yok edilmesini isteme,
                                7.	Aktarıldığı 3. kişilere yukarıda sayılan (e) ve (f) bentleri uyarınca yapılan işlemlerin bildirilmesini isteme,
                                8.	Münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,
                                9.	Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.
                                KVK Kanunu’nun 13. maddesinin 1. fıkrası gereğince, yukarıda belirtilen haklarınızı kullanmak ile ilgili talebinizi, yazılı olarak veya Kişisel Verileri Koruma Kurulu’nun belirlediği diğer yöntemlerle uygulama ve yönetimine iletebilirsiniz.
                                
                                Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tespit edici gerekli bilgiler ile talep dilekçenizi bizzat elden teslim edebilir, noter kanalıyla veya Kişisel Verileri Koruma Kurulu tarafından belirlenen diğer yöntemler ile gönderebilir veya email adresine iletebilirsiniz.
                            </Text>  
                        </View>            
                    </View>
                }
                <TouchableOpacity style={styles.settingsButton} onPress={()=>setVisibleUser(!visibleUser)}>
                    <Text style={styles.setttingsButtonText}>Kullanıcı Sözleşmesi</Text>
                    {visibleUser ?
                        <Image 
                            style={styles.down}
                            source={require('../../assets/icon/down.png')}
                        />
                        :<Image 
                            style={styles.right}
                            source={require('../../assets/icon/right.png')}
                        />
                    }
                </TouchableOpacity>
                {visibleUser &&
                    <View style={styles.inputRow}>
                        <View style={styles.textRow}>
                            <Text>
                                Lütfen uygulamamızı kullanmadan evvel bu ‘uygulama kullanım şartları’nı dikkatlice okuyunuz. 
                                Bu uygulamayı kullanan bütün kullanıcılar aşağıdaki şartları kabul etmiş varsayılmaktadır:
                                Sizler (‘Kullanıcı’) uygulamada sunulan tüm hizmetleri kullanırken aşağıdaki şartlara tabi olduğunuzu, uygulamadaki hizmetten yararlanmakla ve kullanmaya devam etmekle; Bağlı olduğunuz yasalara göre sözleşme imzalama hakkına, yetkisine ve hukuki ehliyetine sahip ve 18 yaşın üzerinde olduğunuzu, bu sözleşmeyi okuduğunuzu, anladığınızı ve sözleşmede yazan şartlarla bağlı olduğunuzu kabul etmiş sayılırsınız. 
                                İşbu sözleşme taraflara sözleşme konusu uygulama ile ilgili hak ve yükümlülükler yükler ve taraflar işbu sözleşmeyi kabul ettiklerinde bahsi geçen hak ve yükümlülükleri eksiksiz, doğru, zamanında, işbu sözleşmede talep edilen şartlar dâhilinde yerine getireceklerini beyan ederler.
                                1. SORUMLULUKLAR
                                a.Uygulama sahibi, fiyatlar ve sunulan ürün ve hizmetler üzerinde değişiklik yapma hakkını her zaman saklı tutar. 
                                b.Uygulama sahibi, üyenin sözleşme konusu hizmetlerden, teknik arızalar dışında yararlandırılacağını kabul ve taahhüt eder.
                                c.Kullanıcı, sitenin kullanımında tersine mühendislik yapmayacağını ya da bunların kaynak kodunu bulmak veya elde etmek amacına yönelik herhangi bir başka işlemde bulunmayacağını aksi halde ve 3. Kişiler nezdinde doğacak zararlardan sorumlu olacağını, hakkında hukuki ve cezai işlem yapılacağını peşinen kabul eder. 
                                d.Kullanıcı, site içindeki faaliyetlerinde, sitenin herhangi bir bölümünde veya iletişimlerinde genel ahlaka ve adaba aykırı, kanuna aykırı, 3. Kişilerin haklarını zedeleyen, yanıltıcı, saldırgan, müstehcen, pornografik, kişilik haklarını zedeleyen, telif haklarına aykırı, yasa dışı faaliyetleri teşvik eden içerikler üretmeyeceğini, paylaşmayacağını kabul eder. Aksi halde oluşacak zarardan tamamen kendisi sorumludur ve bu durumda ‘Uygulama’ yetkilileri, bu tür hesapları askıya alabilir, sona erdirebilir, yasal süreç başlatma hakkını saklı tutar. Bu sebeple yargı mercilerinden etkinlik veya kullanıcı hesapları ile ilgili bilgi talepleri gelirse paylaşma hakkını saklı tutar.
                                e.Uygulamanın üyelerinin birbirleri veya üçüncü şahıslarla olan ilişkileri kendi sorumluluğundadır. 
                                2.  Fikri Mülkiyet Hakları
                                2.1. İşbu Uygulama’da yer alan ünvan, işletme adı, marka, patent, logo, tasarım, bilgi ve yöntem gibi tescilli veya tescilsiz tüm fikri mülkiyet hakları uygulama işleteni ve sahibine veya belirtilen ilgilisine ait olup, ulusal ve uluslararası hukukun koruması altındadır. İşbu uygulamanın ziyaret edilmesi veya bu uygulamadaki hizmetlerden yararlanılması söz konusu fikri mülkiyet hakları konusunda hiçbir hak vermez.
                                2.2. Uygulamada yer alan bilgiler hiçbir şekilde çoğaltılamaz, yayınlanamaz, kopyalanamaz, sunulamaz ve/veya aktarılamaz. Uygulamanın bütünü veya bir kısmı diğer bir internet sitesinde izinsiz olarak kullanılamaz. 
                                3. Gizli Bilgi
                                3.1. Uygulama Sahibi, uygulama üzerinden kullanıcıların ilettiği kişisel bilgileri 3. Kişilere açıklamayacaktır. Bu kişisel bilgiler; kişi adı-soyadı, adresi, telefon numarası, cep telefonu, e-posta adresi gibi kullanıcıyı tanımlamaya yönelik her türlü diğer bilgiyi içermekte olup, kısaca ‘Gizli Bilgiler’ olarak anılacaktır.
                                3.2. Kullanıcı, sadece tanıtım, reklam, kampanya, promosyon, duyuru vb. pazarlama faaliyetleri kapsamında kullanılması ile sınırlı olmak üzere, Uygulamanın sahibi olan firmanın kendisine ait iletişim, portföy durumu ve demografik bilgilerini iştirakleri ya da bağlı bulunduğu grup şirketleri ile paylaşmasına muvafakat ettiğini kabul ve beyan eder. Bu kişisel bilgiler firma bünyesinde müşteri profili belirlemek, müşteri profiline uygun promosyon ve kampanyalar sunmak ve istatistiksel çalışmalar yapmak amacıyla kullanılabilecektir.
                                3.3. Gizli Bilgiler, ancak resmi makamlarca usulü dairesinde bu bilgilerin talep edilmesi halinde ve yürürlükteki emredici mevzuat hükümleri gereğince resmi makamlara açıklama yapılmasının zorunlu olduğu durumlarda resmi makamlara açıklanabilecektir.
                                4. Garanti Vermeme: İŞBU SÖZLEŞME MADDESİ UYGULANABİLİR KANUNUN İZİN VERDİĞİ AZAMİ ÖLÇÜDE GEÇERLİ OLACAKTIR. FİRMA TARAFINDAN SUNULAN HİZMETLER "OLDUĞU GİBİ” VE "MÜMKÜN OLDUĞU” TEMELDE SUNULMAKTA VE PAZARLANABİLİRLİK, BELİRLİ BİR AMACA UYGUNLUK VEYA İHLAL ETMEME KONUSUNDA TÜM ZIMNİ GARANTİLER DE DÂHİL OLMAK ÜZERE HİZMETLER VEYA UYGULAMA İLE İLGİLİ OLARAK (BUNLARDA YER ALAN TÜM BİLGİLER DÂHİL) SARİH VEYA ZIMNİ, KANUNİ VEYA BAŞKA BİR NİTELİKTE HİÇBİR GARANTİDE BULUNMAMAKTADIR. 
                                5. Kayıt ve Güvenlik 
                                Kullanıcı, doğru, eksiksiz ve güncel kayıt bilgilerini vermek zorundadır. Aksi halde bu Sözleşme ihlal edilmiş sayılacak ve kullanıcı bilgilendirilmeksizin hesap kapatılabilecektir.
                                Kullanıcı, site ve üçüncü taraf sitelerdeki şifre ve hesap güvenliğinden kendisi sorumludur. Aksi halde oluşacak veri kayıplarından ve güvenlik ihlallerinden veya donanım ve cihazların zarar görmesinden Firma sorumlu tutulamaz.
                                6. Mücbir Sebep
                                Tarafların kontrolünde olmayan; tabii afetler, yangın, patlamalar, iç savaşlar, savaşlar, ayaklanmalar, halk hareketleri, seferberlik ilanı, grev, lokavt ve salgın hastalıklar, altyapı ve internet arızaları, elektrik kesintisi gibi sebeplerden (aşağıda birlikte "Mücbir Sebep” olarak anılacaktır.) dolayı sözleşmeden doğan yükümlülükler taraflarca ifa edilemez hale gelirse, taraflar bundan sorumlu değildir. Bu sürede Taraflar’ın işbu Sözleşme’den doğan hak ve yükümlülükleri askıya alınır. 
                                7. Sözleşmenin Bütünlüğü ve Uygulanabilirlik
                                İşbu sözleşme şartlarından biri, kısmen veya tamamen geçersiz hale gelirse, sözleşmenin geri kalanı geçerliliğini korumaya devam eder.
                                8. Sözleşmede Yapılacak Değişiklikler
                                Uygulama sahibi, dilediği zaman sitede sunulan hizmetleri ve işbu sözleşme şartlarını kısmen veya tamamen değiştirebilir. Değişiklikler sitede yayınlandığı tarihten itibaren geçerli olacaktır. Değişiklikleri takip etmek Kullanıcı’nın sorumluluğundadır. Kullanıcı, sunulan hizmetlerden yararlanmaya devam etmekle bu değişiklikleri de kabul etmiş sayılır.
                                9. Tebligat
                                İşbu Sözleşme ile ilgili taraflara gönderilecek olan tüm bildirimler, Uygulama sahibinin bilinen e.posta adresi ve kullanıcının üyelik formunda belirttiği e.posta adresi vasıtasıyla yapılacaktır. Kullanıcı, üye olurken belirttiği adresin geçerli tebligat adresi olduğunu, değişmesi durumunda 5 gün içinde yazılı olarak diğer tarafa bildireceğini, aksi halde bu adrese yapılacak tebligatların geçerli sayılacağını kabul eder.
                                10. Delil Sözleşmesi
                                Taraflar arasında işbu sözleşme ile ilgili işlemler için çıkabilecek her türlü uyuşmazlıklarda Taraflar’ın defter, kayıt ve belgeleri ile ve bilgisayar kayıtları ve faks kayıtları 6100 sayılı Hukuk Muhakemeleri Kanunu uyarınca delil olarak kabul edilecek olup, kullanıcı bu kayıtlara itiraz etmeyeceğini kabul eder.
                                11. Uyuşmazlıkların Çözümü
                                İşbu Sözleşme’nin uygulanmasından veya yorumlanmasından doğacak her türlü uyuşmazlığın çözümünde İstanbul (Merkez) Adliyesi Mahkemeleri ve İcra Daireleri yetkilidir.
                            </Text>  
                        </View>            
                    </View>
                }
                <TouchableOpacity style={styles.settingsButton} onPress={()=>props.navigation.navigate('Login')}>
                        <Text style={styles.setttingsButtonText}>Çıkış Yap</Text>
                        <Image 
                            style={styles.logout}
                            source={require('../../assets/icon/logout.png')}
                        />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );

}
const styles = StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:'#F5EFE7'
    },
    container:{
        paddingHorizontal:30,
        paddingVertical:20
    },
    settingsButton:{
        marginTop:10,
        width:330,
        height:40,
        backgroundColor:'#D8C4B6',
        borderRadius:5,
        justifyContent:'space-between',
        paddingTop:10,
        paddingHorizontal:15,
        flexDirection:'row'
    },
    setttingsButtonText:{
        color:'#000000'
    },
    right:{
        width:13,
        height:13,
        marginTop:4
    },
    down:{
        width:20,
        height:20,
        marginTop:2
    },
    logout:{
        width:25,
        height:25,
    },
    inputRow:{
        width:330,
        marginTop:10,
        minHeight:170,
        backgroundColor:'#D8C4B6',
        borderRadius:5,
        padding:15
    },
    textRow:{
        width:300,
        marginTop:10,
        minHeight:170,
        backgroundColor:'#F5EFE7',
        borderRadius:5,
        padding:15
    },
    input:{
        width:300,
        height:40,
        borderRadius:5,
        backgroundColor:'#F5EFE7',
        paddingLeft:15,
        marginBottom:10
    },
    saveButton:{
        width:100,
        height:40,
        backgroundColor:'#F5EFE7',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    saveButtonText:{
        color:'#000000'
    }
})
export default Settings;