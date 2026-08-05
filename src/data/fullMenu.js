/* ===========================================================
   منيو المطعم الكاملة — جاهزة للاستيراد من الأدمن
   -----------------------------------------------------------
   كل قسم (اسم الكاتيجوري) فيه مصفوفة أصناف، وكل صنف فيه:
   - name: اسم الصنف
   - description: شرح الصنف (بيظهر تحت اسمه في الموقع)
   - price: السعر بالجنيه
   - image: رابط صورة (تقدر تغيّرها بصورة حقيقية للمطعم بعدين)

   عايز تضيف صنف جديد؟ ضيف object جديد جوه القسم المناسب.
   عايز تضيف قسم جديد بالكامل؟ ضيف مفتاح جديد بالشكل ده:
   "اسم القسم الجديد": [ { name: "...", description: "...", price: 0, image: "..." } ]
=========================================================== */

export const FULL_MENU = {
  "مقبلات": [
    {
      name: "بطاطس مقرمشة",
      description: "بطاطس مقلية ذهبية اللون تقدم ساخنة مع الكاتشب والمايونيز",
      price: 65,
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800",
    },
    {
      name: "حلقات بصل مقرمشة",
      description: "حلقات بصل مغطاة بالبقسماط الذهبي ومقلية حتى تصبح مقرمشة",
      price: 75,
      image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=800",
    },
    {
      name: "أصابع موزاريلا",
      description: "أصابع جبنة موزاريلا مقرمشة من الخارج وسائحة من الداخل، تقدم بصوص المارينارا",
      price: 95,
      image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=800",
    },
    {
      name: "ناتشوز مشكل",
      description: "رقائق ناتشوز مقرمشة مغطاة بالجبنة الذائبة وصوص الجواكامولي والصلصة الحارة",
      price: 110,
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800",
    },
    {
      name: "كبة مقلية",
      description: "كبة محشوة باللحم المفروم والبصل والصنوبر، مقلية حتى القرمشة الذهبية",
      price: 85,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    },
  ],

  "سلطات": [
    {
      name: "سلطة سيزر بالدجاج",
      description: "خس روماني طازج مع قطع دجاج مشوية وجبنة بارميزان وصوص السيزر الأصلي",
      price: 95,
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800",
    },
    {
      name: "سلطة يونانية",
      description: "خضار طازجة مع جبنة الفيتا والزيتون الأسود وزيت الزيتون البكر",
      price: 80,
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800",
    },
    {
      name: "سلطة خضراء",
      description: "خليط من الخضروات الطازجة الموسمية مع صوص الليمون وزيت الزيتون",
      price: 55,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    },
    {
      name: "تبولة",
      description: "برغل مع البقدونس الطازج والطماطم والنعناع وعصير الليمون",
      price: 60,
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
    },
  ],

  "شوربات": [
    {
      name: "شوربة عدس",
      description: "شوربة عدس أصفر مصرية تقليدية تقدم ساخنة مع الخبز المحمص",
      price: 45,
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
    },
    {
      name: "شوربة خضار",
      description: "خضروات طازجة مطهية ببطء في مرقة خفيفة ومتبلة",
      price: 45,
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
    },
    {
      name: "شوربة دجاج بالشعرية",
      description: "مرقة دجاج غنية مع قطع الدجاج والشعرية المحمصة",
      price: 55,
      image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=800",
    },
  ],

  "مشويات": [
    {
      name: "مشاوي مشكلة",
      description: "تشكيلة من كفتة وشيش طاووق وريش ضاني مشوية على الفحم، تقدم مع الأرز والسلطة",
      price: 220,
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800",
    },
    {
      name: "كفتة مشوية",
      description: "كفتة لحم بلدي متبلة بالبهارات الشرقية ومشوية على الفحم",
      price: 140,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    },
    {
      name: "شيش طاووق",
      description: "قطع صدور دجاج متبلة ومشوية على الفحم مع الفلفل الملون",
      price: 135,
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?w=800",
    },
    {
      name: "ريش ضاني مشوية",
      description: "ريش ضاني طرية متبلة بالأعشاب ومشوية على الفحم",
      price: 260,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    },
  ],

  "أطباق رئيسية": [
    {
      name: "فاهيتا دجاج",
      description: "شرائح دجاج متبلة مع الفلفل الملون والبصل، تقدم مع خبز التورتيلا والصلصات",
      price: 155,
      image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=800",
    },
    {
      name: "باستا ألفريدو بالدجاج",
      description: "معكرونة بصوص الكريمة والجبن الإيطالي مع قطع الدجاج المشوية",
      price: 130,
      image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800",
    },
    {
      name: "باستا بولونيز",
      description: "معكرونة بصوص الطماطم واللحم المفروم الإيطالي الأصلي",
      price: 125,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800",
    },
    {
      name: "أرز بالدجاج والخضار",
      description: "أرز مطهو مع قطع الدجاج والخضروات الطازجة والبهارات",
      price: 105,
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    },
    {
      name: "مكرونة بشاميل",
      description: "مكرونة باللحمة المفرومة مغطاة بطبقة بشاميل كريمية ومخبوزة بالفرن",
      price: 95,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800",
    },
  ],

  "بيتزا": [
    {
      name: "بيتزا مارجريتا",
      description: "عجينة إيطالية طازجة مع صلصة الطماطم وجبنة الموزاريلا الطازجة والريحان",
      price: 140,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
    },
    {
      name: "بيتزا فراخ باربكيو",
      description: "بيتزا بقطع الدجاج المتبل وصوص الباربكيو المميز والجبنة",
      price: 165,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    },
    {
      name: "بيتزا خضار",
      description: "بيتزا بتشكيلة من الخضروات الطازجة الملونة وجبنة الموزاريلا",
      price: 130,
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    },
    {
      name: "بيتزا لحمة مفرومة",
      description: "بيتزا باللحم المفروم المتبل والفلفل والبصل وجبنة الموزاريلا",
      price: 170,
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800",
    },
  ],

  "ساندوتشات": [
    {
      name: "برجر بيف كلاسيك",
      description: "قطعة لحم بقري مشوية مع الجبنة الشيدر والخس والطماطم في خبز البرجر الطازج",
      price: 150,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    },
    {
      name: "برجر دجاج كرسبي",
      description: "فيليه دجاج مقرمش مع صوص خاص وخس طازج في خبز البرجر",
      price: 135,
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800",
    },
    {
      name: "شاورما دجاج",
      description: "شاورما دجاج مشوية على الطريقة الشرقية بالخبز البلدي مع الثومية والمخلل",
      price: 90,
      image: "https://images.unsplash.com/photo-1633897233825-9e6b0a2d1a3f?w=800",
    },
    {
      name: "شاورما لحمة",
      description: "شرائح لحم رفيعة متبلة ومشوية، تقدم بالخبز البلدي مع الطحينة والمخلل",
      price: 110,
      image: "https://images.unsplash.com/photo-1633897233825-9e6b0a2d1a3f?w=800",
    },
    {
      name: "هوت دوج كلاسيك",
      description: "نقانق مشوية في خبز طازج مع الخردل والكاتشب والبصل المقرمش",
      price: 80,
      image: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?w=800",
    },
  ],

  "مشروبات ساخنة": [
    {
      name: "شاي أحمر",
      description: "شاي كلاسيك يقدم ساخن في كوب تقليدي",
      price: 25,
      image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8ee?w=800",
    },
    {
      name: "نسكافيه",
      description: "قهوة سريعة التحضير تقدم مع الحليب الساخن",
      price: 35,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
    },
    {
      name: "كابتشينو",
      description: "إسبريسو إيطالي مع رغوة حليب كريمية ورشة كاكاو",
      price: 45,
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800",
    },
    {
      name: "هوت شوكليت",
      description: "شوكولاتة ساخنة غنية القوام تقدم بالكريمة المخفوقة",
      price: 50,
      image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800",
    },
    {
      name: "قهوة تركي",
      description: "قهوة تركية أصلية مطحونة ناعم ومطهوة على النار الهادئة",
      price: 30,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
    },
  ],

  "مشروبات باردة وعصائر": [
    {
      name: "عصير مانجو",
      description: "عصير مانجو طبيعي طازج بدون إضافات",
      price: 45,
      image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800",
    },
    {
      name: "عصير فراولة",
      description: "عصير فراولة طبيعي بارد ومنعش",
      price: 45,
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800",
    },
    {
      name: "ليموناضة بالنعناع",
      description: "عصير ليمون طازج مع النعناع الطازج والثلج المجروش",
      price: 40,
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800",
    },
    {
      name: "آيس تي",
      description: "شاي مثلج منعش بطعم الليمون الطبيعي",
      price: 35,
      image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=800",
    },
    {
      name: "مياه غازية",
      description: "مشروب غازي بارد (كولا / سفن أب / فانتا)",
      price: 20,
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=800",
    },
  ],

  "حلويات": [
    {
      name: "تشيز كيك",
      description: "قطعة تشيز كيك كريمية غنية بقاعدة البسكويت المقرمشة",
      price: 85,
      image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800",
    },
    {
      name: "براونيز بالشوكولاتة",
      description: "براونيز ساخن غني بالشوكولاتة الداكنة يقدم مع كرة آيس كريم",
      price: 75,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",
    },
    {
      name: "كريب نوتيلا",
      description: "كريب طازج محشو بكريمة النوتيلا وشرائح الموز",
      price: 70,
      image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800",
    },
    {
      name: "آيس كريم (٣ كور)",
      description: "ثلاث كور آيس كريم بنكهات مختارة تقدم مع الصوص الشوكولاتة",
      price: 60,
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800",
    },
    {
      name: "أم علي",
      description: "حلوى مصرية تقليدية من العجين المقرمش والحليب والمكسرات والزبيب، تقدم ساخنة",
      price: 65,
      image: "https://images.unsplash.com/photo-1631206753348-db44968fd440?w=800",
    },
    {
      name: "كنافة بالقشطة",
      description: "كنافة مقرمشة محشوة بالقشطة الطازجة ومغطاة بالقطر",
      price: 70,
      image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800",
    },
  ],
};