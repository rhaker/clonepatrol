// settings in local storage
let storage = chrome.storage.local;

// set-up the default identity of the clone
let cloneID = 1;
let cloneName = "Grandpa George";

// set-up urlList array for each clone
let urlListClone1 = [];
let urlListClone2 = [];
let urlListClone3 = [];
let urlListClone4 = [];
let urlListClone5 = [];
let urlListClone6 = [];
	
// set-up whitelists for each clone universe
urlListClone1[0] = 'https://www.grandpastore.com/';
urlListClone1[1] = 'https://www.theangrygrandpa.com/';
urlListClone1[2] = 'https://aga.grandparents.com/';
urlListClone1[3] = 'https://www.gransnet.com/';
urlListClone1[4] = 'https://grandparenting.org/';
urlListClone1[5] = 'https://www.stageoflife.com/StageGrandparents/GrandparentingBlogsArchive.aspx';
urlListClone1[6] = 'https://gogograndparent.com/';
urlListClone1[7] = 'https://www.usatoday.com/story/news/nation/2013/12/07/grandparent-names-baby-boomers/3882725/';
urlListClone1[8] = 'https://www.aarp.org/relationships/grandparenting/info-11-2010/goyer_grandparenting_advice.html';
urlListClone1[9] = 'http://www.nextavenue.org/7-ways-be-cool-grandparent/';
urlListClone1[10] = 'http://www.grandsmatter.org/';
urlListClone1[11] = 'https://christiangrandparenting.net/';
urlListClone1[12] = 'http://www.raisingyourgrandchildren.com/State_information.htm';
urlListClone1[13] = 'https://teespring.com/shop/grandparent-tshirts';
urlListClone1[14] = 'http://www.familyrelationships.gov.au/AboutYou/Grandparents/Pages/default.aspx';
urlListClone1[15] = 'https://www.rd.com/health/conditions/grandparent-good-for-health/';
urlListClone1[16] = 'https://www.wsj.com/articles/SB10001424052702303674004577434004083280414';
urlListClone1[17] = 'https://www.activityvillage.co.uk/grandparents-day';
urlListClone1[18] = 'https://www.whoishostingthis.com/blog/2016/04/27/grandparents-internet/';
urlListClone1[19] = 'https://www.familyeducation.com/videos/12-great-activities-grandparents-grandchildren';
urlListClone1[20] = 'http://www.catholicgrandparentsassociation.org/';
urlListClone1[21] = 'http://www.laparks.org/scc';
urlListClone1[22] = 'http://www.laparks.org/scc/betty-hill';
urlListClone1[23] = 'https://www.after55.com/blog/senior-citizen-age/';
urlListClone1[24] = 'http://www.latimes.com/home/la-hm-la-affairs-diane-stanfield-20160915-snap-story.html';
urlListClone1[25] = 'https://money.usnews.com/money/retirement/articles/2012/09/17/how-to-get-senior-citizen-discounts';
urlListClone1[26] = 'https://www.adventisthealth.org/white-memorial/pages/senior-citizen-assistance.aspx';
urlListClone1[27] = 'http://www.airindia.in/senior-citizen-concession.htm';
urlListClone1[28] = 'https://www.mapquest.com/us/california/chinatown-senior-citizen-service-center-279766033';
urlListClone1[29] = 'https://www.hud.gov/topics/information_for_senior_citizens';
urlListClone1[30] = 'https://www.hud.gov/program_offices/housing/sfh/hecm/hecmhome';
urlListClone1[31] = 'https://apps.hud.gov/offices/hsg/sfh/hcc/hcs.cfm';
urlListClone1[32] = 'https://www.hud.gov/program_offices/housing/mfh/hto/inventorysurvey';
urlListClone1[33] = 'https://admissions.boisestate.edu/senior-citizen-rate/';
urlListClone1[34] = 'http://sclonm.org/our-services/';
urlListClone1[35] = 'https://www.huffingtonpost.com/topic/senior%20citizens';
urlListClone1[36] = 'https://www.huffingtonpost.com/entry/nursing-home-residents-rescued_us_59a30b62e4b05710aa5cf1be';
urlListClone1[37] = 'https://www.huffingtonpost.com/entry/the-love-of-her-life-at-ninety_us_58f5b120e4b04cae050dca7b';
urlListClone1[38] = 'https://www.huffingtonpost.com/entry/fix-this-national-disgrace-expand-social-security_us_57eaaab2e4b0972364dea4fa';
urlListClone1[39] = 'https://www.huffingtonpost.com/entry/photos-of-seniors-with-old-cats-will-make-you-feel-warm-and-fuzzy_us_57850c43e4b0ed2111d7979d';
urlListClone1[40] = 'https://economictimes.indiatimes.com/wealth/invest/all-you-need-to-know-about-senior-citizen-savings-scheme/articleshow/57251600.cms';
urlListClone1[41] = 'https://www.retailmenot.com/blog/senior-discounts.html';
urlListClone1[42] = 'http://www.twp.millburn.nj.us/seniors';
urlListClone1[43] = 'http://www.natchez.ms.us/146/Senior-Citizens-Multipurpose-Center';
urlListClone1[44] = 'https://www.entrepreneur.com/article/286382';
urlListClone1[45] = 'https://wwwnc.cdc.gov/travel/page/senior-citizens';
urlListClone1[46] = 'https://www.stcc.edu/apply/senior-citizens/';
urlListClone1[47] = 'http://seniorsleague.org/';
urlListClone1[48] = 'https://www.wildlife.ca.gov/fishing';
urlListClone1[49] = 'http://www.basspro.com/shop/en/fishing';
urlListClone1[50] = 'https://www.daveyslocker.com/deep-sea-fishing/los-angeles/';
urlListClone1[51] = 'https://www.yelp.com/search?find_desc=Fishing+Spots&find_loc=Los+Angeles%2C+CA';
urlListClone1[52] = 'https://en.wikipedia.org/wiki/Fishing';
urlListClone1[53] = 'https://www.outdoorlife.com/fishing';
urlListClone1[54] = 'http://www.cabelas.com/category/Fishing/104793480.uts';
urlListClone1[55] = 'https://www.fs.usda.gov/activity/angeles/recreation/fishing';
urlListClone1[56] = 'http://www.22ndstreet.com/fishreports.php';
urlListClone1[57] = 'https://www.instagram.com/explore/tags/fishing/?hl=en';
urlListClone1[58] = 'https://www.nps.gov/yell/planyourvisit/fishing.htm';
urlListClone1[59] = 'http://www.ndow.org/Fish/';
urlListClone1[60] = 'https://huntfish.mdc.mo.gov/fishing/species/trout/trout-where-fish';
urlListClone1[61] = 'http://www.in.gov/dnr/fishwild/9339.htm';
urlListClone1[62] = 'http://www.dnr.sc.gov/fishing.html';
urlListClone1[63] = 'http://myfwc.com/fishing/saltwater/recreational/';
urlListClone1[64] = 'http://www.nj.gov/dep/fgw/fishing.htm';
urlListClone1[65] = 'https://www.azgfd.com/';
urlListClone1[66] = 'https://www.liveabout.com/when-does-old-age-begin-2969194';
urlListClone1[67] = 'http://www.seniorcitizensguide.com/articles/indianapolis/when-do-i-become-a-senior.htm';
urlListClone1[68] = 'http://seniors.ca.gov/';
urlListClone1[69] = 'http://seniorcitizen.travel/';
urlListClone1[70] = 'https://www.ag.state.mn.us/Consumer/Seniors/default.asp';
urlListClone1[71] = 'https://www.ready.gov/seniors';
urlListClone1[72] = 'https://www.agingcare.com/Articles/free-services-for-seniors-or-caregivers-156443.htm';
urlListClone1[73] = 'https://patch.com/new-york/northport/bp--10-free-programs-for-seniors-that-you-may-not-know-about';
urlListClone1[74] = 'http://www.needhelppayingbills.com/html/senior_assistance_programs.html';
urlListClone1[75] = 'http://www.free4seniors.com/';
urlListClone1[76] = 'https://preferhome.com/senior-resources/common-senior-concerns/free-services-for-seniors/';
urlListClone1[77] = 'http://seniors.lovetoknow.com/Free_Stuff_for_Seniors';
urlListClone1[78] = 'http://stuffseniorsneed.com/free-dentures-and-free-dental-care/';
urlListClone1[79] = 'http://elderhelpers.org/index2.php';
urlListClone1[80] = 'http://www.aging.ca.gov/programs/';
urlListClone1[81] = 'https://www.bing.com/search?q=senior+citizen';
urlListClone1[82] = 'https://www.bing.com/search?q=grandparent+advice';
urlListClone1[83] = 'https://www.bing.com/search?q=grandpa+trips';
urlListClone1[84] = 'http://seniorslist.com/search/senior-services-m.php';
urlListClone1[85] = 'https://www.agingcare.com/Articles/10-Government-Programs-Caregivers-Can-Access-for-Their-Elderly-Parents-120513.htm';
urlListClone1[86] = 'https://www.bing.com/search?q=grandpa+fishing';
urlListClone1[87] = 'https://www.bing.com/search?q=fly+fishing';
urlListClone1[88] = 'https://www.bing.com/search?q=fishing+trips';
urlListClone1[89] = 'https://www.aarp.org/retirement/';
urlListClone1[90] = 'https://www.ssa.gov/planners/retire/';
urlListClone1[91] = 'https://www.forbes.com/retirement/';
urlListClone1[92] = 'https://www.latimes.com/business/la-fi-montalk-20171029-story.html';
urlListClone1[93] = 'https://money.cnn.com/retirement/';
urlListClone1[94] = 'https://www.nytimes.com/guides/business/saving-money-for-retirement';
urlListClone1[95] = 'https://www.forbes.com/sites/williampbarrett/2017/04/20/the-best-places-to-retire-in-2017/#6109b385f3ad';
urlListClone1[96] = 'https://money.usnews.com/money/retirement';
urlListClone1[97] = 'https://finance.yahoo.com/topic/retirement/';
urlListClone1[98] = 'https://retirementplans.vanguard.com/VGApp/pe/pubeducation/calculators/RetirementIncomeCalc.jsf';
urlListClone1[99] = 'https://www.marketwatch.com/retirement';
urlListClone1[100] = 'https://www.nerdwallet.com/investing/retirement-calculator';
urlListClone1[101] = 'https://www3.troweprice.com/ric/ricweb/public/ric.do';
urlListClone1[102] = 'https://www.theatlantic.com/politics/archive/2012/01/what-americans-mean-when-they-say-theyre-conservative/252099/';
urlListClone1[103] = 'https://townhall.com/';
urlListClone1[104] = 'http://www.nationalreview.com/';
urlListClone1[105] = 'http://www.economist.com/topics/american-conservative-politics';
urlListClone1[106] = 'https://www.commentarymagazine.com/articles/the-politics-of-conservative-realism/';
urlListClone1[107] = 'https://www.thoughtco.com/us-conservative-politics-4133006';
urlListClone1[108] = 'http://prospect.org/article/constitutional-politics-and-conservative-court';
urlListClone1[109] = 'https://www.vacationscostarica.com/packages/fishing/';
urlListClone1[110] = 'https://www.tripadvisor.com/HotelsList-United_States-Fishing-Resorts-zfp7727790.html';
urlListClone1[111] = 'http://www.gameandfishmag.com/fishing/10-top-destinations-for-family-fishing-vacations/';
urlListClone1[112] = 'https://carpe-travel.com/best-spots-for-family-fishing-vacations-you-dont-know-about-fishing-with-family/';
urlListClone1[113] = 'https://www.tripstodiscover.com/15-of-the-most-amazing-caribbean-resorts-for-fishing-enthusiasts/';
urlListClone1[114] = 'http://www.elpescador.com/resort/rates/fishing';
urlListClone1[115] = 'https://www.cheapcaribbean.com/deals/deep-sea-fishing-vacations.html';
urlListClone1[116] = 'https://www.montanaangler.com/montana-fishing-lodges';
urlListClone1[117] = 'https://www.sportfishingmag.com/travel/north-america/5-top-north-american-fishing-lodges';
urlListClone1[118] = 'https://www.huffingtonpost.com/2010/11/26/10-amazing-north-american_n_787915.html';
urlListClone1[119] = 'https://www.google.com/search?q=senior+grandparents';
urlListClone1[120] = 'https://www.google.com/search?q=becoming+grandparent';
urlListClone1[121] = 'https://www.google.com/search?q=old+age+medication';
urlListClone1[122] = 'https://www.google.com/search?q=social+security';
urlListClone1[123] = 'https://www.google.com/search?q=grandpa+george';
urlListClone1[124] = 'https://www.google.com/search?q=turning+80';
urlListClone1[125] = 'https://www.google.com/search?q=octogenarian';
urlListClone1[126] = 'https://www.google.com/search?q=i+am+a+grandparent';
urlListClone1[127] = 'https://www.google.com/search?q=grandpa+widow';
urlListClone1[128] = 'https://www.google.com/search?q=senior+citizen+tip';
urlListClone1[129] = 'https://www.google.com/search?q=grandpa+tips';
urlListClone1[130] = 'https://www.google.com/search?q=grandparent+help';
urlListClone1[131] = 'https://www.google.com/search?q=grandparent+aid';
urlListClone1[132] = 'https://www.google.com/search?q=retirement+living';
urlListClone1[133] = 'https://www.google.com/search?q=retirement+grandparent';
urlListClone1[134] = 'https://www.google.com/search?q=visit+grandparent';
urlListClone1[135] = 'https://www.google.com/search?q=two+grandparents';
urlListClone1[136] = 'https://www.google.com/search?q=grandparents+day';
urlListClone1[137] = 'https://www.google.com/search?q=grandparents+rights';
urlListClone1[138] = 'https://www.google.com/search?q=grandparents+gifts';
urlListClone1[139] = 'https://www.google.com/search?q=grandparenting';
urlListClone1[140] = 'https://www.google.com/search?q=grandparents+gear';
urlListClone1[141] = 'https://www.google.com/search?q=grandpa+fishing';
urlListClone1[142] = 'https://www.google.com/search?q=grandparents+fish+gear';
urlListClone1[143] = 'https://www.google.com/search?q=tours+grandparents';
urlListClone1[144] = 'https://www.google.com/search?q=senior+citizen+tours';
urlListClone1[145] = 'https://www.google.com/search?q=sunset+years';
urlListClone1[146] = 'https://www.google.com/search?q=enjoy+last+years';
urlListClone1[147] = 'https://www.google.com/search?q=avoid+alzheimers';
urlListClone1[148] = 'https://www.google.com/search?q=memory+loss';
urlListClone1[149] = 'https://www.google.com/search?q=grandparent+health';
urlListClone1[150] = 'https://www.google.com/search?q=grandpa+health';
urlListClone1[151] = 'https://www.google.com/search?q=walking+cane';
urlListClone1[152] = 'https://www.google.com/search?q=grandpa+stroller';
urlListClone1[153] = 'https://www.google.com/search?q=elderly+gear';
urlListClone1[154] = 'https://www.google.com/search?q=elderly+health';
urlListClone1[155] = 'https://www.google.com/search?q=grandparent+drugs';
urlListClone1[156] = 'https://www.google.com/search?q=grandparent+hospital';
urlListClone1[157] = 'https://www.google.com/search?q=best+senior+healthcare';
urlListClone1[158] = 'https://www.google.com/search?q=best+fishing+conferences';
urlListClone1[159] = 'https://www.google.com/search?q=fishing+convention';
urlListClone1[160] = 'https://www.google.com/search?q=retirement+packages';
urlListClone1[161] = 'https://www.google.com/search?q=retirement+finances';
urlListClone1[162] = 'https://www.google.com/search?q=elderly+finances';
urlListClone1[163] = 'https://www.google.com/search?q=elderly+scam';
urlListClone1[164] = 'https://www.google.com/search?q=elderly+financial+help';
urlListClone1[165] = 'https://www.google.com/search?q=senior+finances';
urlListClone1[166] = 'https://www.google.com/search?q=best+assisted+living';
urlListClone1[167] = 'https://www.google.com/search?q=grandpa+gear';
urlListClone1[168] = 'https://www.google.com/search?q=elderly+sleep';
urlListClone1[169] = 'https://www.google.com/search?q=sleeping+issues';
urlListClone1[170] = 'https://www.google.com/search?q=sleeping+health+grandparents';
urlListClone1[171] = 'https://www.bing.com/search?q=grandpa+george';
urlListClone1[172] = 'https://www.bing.com/search?q=turning+80';
urlListClone1[173] = 'https://www.bing.com/search?q=octogenarian';
urlListClone1[174] = 'https://www.bing.com/search?q=i+am+a+grandparent';
urlListClone1[175] = 'https://www.bing.com/search?q=grandpa+widow';
urlListClone1[176] = 'https://www.bing.com/search?q=senior+citizen+tip';
urlListClone1[177] = 'https://www.bing.com/search?q=grandpa+tips';
urlListClone1[178] = 'https://www.bing.com/search?q=grandparent+help';
urlListClone1[179] = 'https://www.bing.com/search?q=grandparent+aid';
urlListClone1[180] = 'https://www.bing.com/search?q=retirement+living';
urlListClone1[181] = 'https://www.bing.com/search?q=retirement+grandparent';
urlListClone1[182] = 'https://www.bing.com/search?q=visit+grandparent';
urlListClone1[183] = 'https://www.bing.com/search?q=two+grandparents';
urlListClone1[184] = 'https://www.bing.com/search?q=grandparents+day';
urlListClone1[185] = 'https://www.bing.com/search?q=grandparents+rights';
urlListClone1[186] = 'https://www.bing.com/search?q=grandparents+gifts';
urlListClone1[187] = 'https://www.bing.com/search?q=grandparenting';
urlListClone1[188] = 'https://www.bing.com/search?q=grandparents+gear';
urlListClone1[189] = 'https://www.bing.com/search?q=grandpa+fishing';
urlListClone1[190] = 'https://www.bing.com/search?q=grandparents+fish+gear';
urlListClone1[191] = 'https://www.bing.com/search?q=tours+grandparents';
urlListClone1[192] = 'https://www.bing.com/search?q=senior+citizen+tours';
urlListClone1[193] = 'https://www.bing.com/search?q=sunset+years';
urlListClone1[194] = 'https://www.bing.com/search?q=enjoy+last+years';
urlListClone1[195] = 'https://www.bing.com/search?q=avoid+alzheimers';
urlListClone1[196] = 'https://www.bing.com/search?q=memory+loss';
urlListClone1[197] = 'https://www.bing.com/search?q=grandparent+health';
urlListClone1[198] = 'https://www.bing.com/search?q=grandpa+health';
urlListClone1[199] = 'https://www.bing.com/search?q=walking+cane';
urlListClone1[200] = 'https://www.bing.com/search?q=grandpa+stroller';
urlListClone1[201] = 'https://www.bing.com/search?q=elderly+gear';
urlListClone1[202] = 'https://www.bing.com/search?q=elderly+health';
urlListClone1[203] = 'https://www.bing.com/search?q=grandparent+drugs';
urlListClone1[204] = 'https://www.bing.com/search?q=grandparent+hospital';
urlListClone1[205] = 'https://www.bing.com/search?q=best+senior+healthcare';
urlListClone1[206] = 'https://www.bing.com/search?q=best+fishing+conferences';
urlListClone1[207] = 'https://www.bing.com/search?q=fishing+convention';
urlListClone1[208] = 'https://www.bing.com/search?q=retirement+packages';
urlListClone1[209] = 'https://www.bing.com/search?q=retirement+finances';
urlListClone1[210] = 'https://www.bing.com/search?q=elderly+finances';
urlListClone1[211] = 'https://www.bing.com/search?q=elderly+scam';
urlListClone1[212] = 'https://www.bing.com/search?q=elderly+financial+help';
urlListClone1[213] = 'https://www.bing.com/search?q=senior+finances';
urlListClone1[214] = 'https://www.bing.com/search?q=best+assisted+living';
urlListClone1[215] = 'https://www.bing.com/search?q=grandpa+gear';
urlListClone1[216] = 'https://www.bing.com/search?q=elderly+sleep';
urlListClone1[217] = 'https://www.bing.com/search?q=sleeping+issues';
urlListClone1[218] = 'https://www.bing.com/search?q=sleeping+health+grandparents';
urlListClone1[219] = 'https://search.yahoo.com/search?q=grandpa+george';
urlListClone1[220] = 'https://search.yahoo.com/search?q=turning+80';
urlListClone1[221] = 'https://search.yahoo.com/search?q=octogenarian';
urlListClone1[222] = 'https://search.yahoo.com/search?q=i+am+a+grandparent';
urlListClone1[223] = 'https://search.yahoo.com/search?q=grandpa+widow';
urlListClone1[224] = 'https://search.yahoo.com/search?q=senior+citizen+tip';
urlListClone1[225] = 'https://search.yahoo.com/search?q=grandpa+tips';
urlListClone1[226] = 'https://search.yahoo.com/search?q=grandparent+help';
urlListClone1[227] = 'https://search.yahoo.com/search?q=grandparent+aid';
urlListClone1[228] = 'https://search.yahoo.com/search?q=retirement+living';
urlListClone1[229] = 'https://search.yahoo.com/search?q=retirement+grandparent';
urlListClone1[230] = 'https://search.yahoo.com/search?q=visit+grandparent';
urlListClone1[231] = 'https://search.yahoo.com/search?q=two+grandparents';
urlListClone1[232] = 'https://search.yahoo.com/search?q=grandparents+day';
urlListClone1[233] = 'https://search.yahoo.com/search?q=grandparents+rights';
urlListClone1[234] = 'https://search.yahoo.com/search?q=grandparents+gifts';
urlListClone1[235] = 'https://search.yahoo.com/search?q=grandparenting';
urlListClone1[236] = 'https://search.yahoo.com/search?q=grandparents+gear';
urlListClone1[237] = 'https://search.yahoo.com/search?q=grandpa+fishing';
urlListClone1[238] = 'https://search.yahoo.com/search?q=grandparents+fish+gear';
urlListClone1[239] = 'https://search.yahoo.com/search?q=tours+grandparents';
urlListClone1[240] = 'https://search.yahoo.com/search?q=senior+citizen+tours';
urlListClone1[241] = 'https://search.yahoo.com/search?q=sunset+years';
urlListClone1[242] = 'https://search.yahoo.com/search?q=enjoy+last+years';
urlListClone1[243] = 'https://search.yahoo.com/search?q=avoid+alzheimers';
urlListClone1[244] = 'https://search.yahoo.com/search?q=memory+loss';
urlListClone1[245] = 'https://search.yahoo.com/search?q=grandparent+health';
urlListClone1[246] = 'https://search.yahoo.com/search?q=grandpa+health';
urlListClone1[247] = 'https://search.yahoo.com/search?q=walking+cane';
urlListClone1[248] = 'https://search.yahoo.com/search?q=grandpa+stroller';
urlListClone1[249] = 'https://search.yahoo.com/search?q=elderly+gear';
urlListClone1[250] = 'https://search.yahoo.com/search?q=elderly+health';
urlListClone1[251] = 'https://search.yahoo.com/search?q=grandparent+drugs';
urlListClone1[252] = 'https://search.yahoo.com/search?q=grandparent+hospital';
urlListClone1[253] = 'https://search.yahoo.com/search?q=best+senior+healthcare';
urlListClone1[254] = 'https://search.yahoo.com/search?q=best+fishing+conferences';
urlListClone1[255] = 'https://search.yahoo.com/search?q=fishing+convention';
urlListClone1[256] = 'https://search.yahoo.com/search?q=retirement+packages';
urlListClone1[257] = 'https://search.yahoo.com/search?q=retirement+finances';
urlListClone1[258] = 'https://search.yahoo.com/search?q=elderly+finances';
urlListClone1[259] = 'https://search.yahoo.com/search?q=elderly+scam';
urlListClone1[260] = 'https://search.yahoo.com/search?q=elderly+financial+help';
urlListClone1[261] = 'https://search.yahoo.com/search?q=senior+finances';
urlListClone1[262] = 'https://search.yahoo.com/search?q=best+assisted+living';
urlListClone1[263] = 'https://search.yahoo.com/search?q=grandpa+gear';
urlListClone1[264] = 'https://search.yahoo.com/search?q=elderly+sleep';
urlListClone1[265] = 'https://search.yahoo.com/search?q=sleeping+issues';
urlListClone1[266] = 'https://search.yahoo.com/search?q=sleeping+health+grandparents';
urlListClone1[267] = 'https://search.yahoo.com/search?p=grandkid+gifts';
urlListClone1[268] = 'https://search.yahoo.com/search?p=senior+homes';
urlListClone1[269] = 'https://search.yahoo.com/search?p=assisted+living';
urlListClone1[270] = 'https://search.yahoo.com/search?p=bass+fishing';
urlListClone1[271] = 'https://search.yahoo.com/search?p=trips+fishing';
urlListClone1[272] = 'https://search.yahoo.com/search?p=fishing+vacation';
urlListClone1[273] = 'https://search.yahoo.com/search?p=fishing+gear';

urlListClone2[0] = 'http://www.redbookmag.com/life/mom-kids/';
urlListClone2[1] = 'https://www.homewiththekids.com/';
urlListClone2[2] = 'https://www.etsy.com/market/mom_with_kids_sign';
urlListClone2[3] = 'http://www.circleofmoms.com/moms-kids-adhd';
urlListClone2[4] = 'http://www.sheknows.com/community/parenting/6-lies-we-stay-home-moms-tell-ourselves-and-other-people';
urlListClone2[5] = 'http://singlemomwithkids.jobsearchtjr.com/';
urlListClone2[6] = 'https://mom.me/kids/';
urlListClone2[7] = 'https://moms.com/';
urlListClone2[8] = 'http://www.poshmommyjewelry.com/';
urlListClone2[9] = 'http://newparent.com/gear/10-best-parenting-websites';
urlListClone2[10] = 'http://mashable.com/2012/05/12/mom-websites/#TnDTnKwP88q9';
urlListClone2[11] = 'https://www.workingmother.com/';
urlListClone2[12] = 'https://www.modernmom.com/';
urlListClone2[13] = 'http://www.whowhatwear.com/best-mom-motherhood-blogs-sites-2014-1';
urlListClone2[14] = 'http://romyandthebunnies.com/';
urlListClone2[15] = 'http://www.amerrymishapblog.com/';
urlListClone2[16] = 'http://ripandtan.jennikayne.com/';
urlListClone2[17] = 'http://www.unruly-things.com/';
urlListClone2[18] = 'http://theglow.com/';
urlListClone2[19] = 'http://thehivemag.com/';
urlListClone2[20] = 'http://www.amessagewithabottle.com/best-parenting-websites-blogs/';
urlListClone2[21] = 'http://www.parenting.com/blogs/screen-play/jeana-lee-tahnk/parents-have-spoken-and-chosen-these-websites-top-picks';
urlListClone2[22] = 'https://www.realsimple.com/work-life/family/kids-parenting/best-parenting-websites';
urlListClone2[23] = 'http://themombeat.com';
urlListClone2[24] = 'https://happystronghome.com';
urlListClone2[25] = 'https://sunshinemomma.com';
urlListClone2[26] = 'https://rookieparenting.com';
urlListClone2[27] = 'https://wheelndealmama.com';
urlListClone2[28] = 'http://themultitaskinmom.com';
urlListClone2[29] = 'http://designthusiasm.com/';
urlListClone2[30] = 'https://hearthomeandtravel.com';
urlListClone2[31] = 'https://npnparents.org';
urlListClone2[32] = 'https://familytravelmagazine.com';
urlListClone2[33] = 'https://primewomen.com';
urlListClone2[34] = 'https://proverbialhomemaker.com';
urlListClone2[35] = 'https://livinglifeandlearning.com';
urlListClone2[36] = 'https://realmomnutrition.com';
urlListClone2[37] = 'https://mashupmom.com';
urlListClone2[38] = 'https://oxygenmag.com';
urlListClone2[39] = 'https://joyfoodsunshine.com';
urlListClone2[40] = 'https://livingwellmom.com';
urlListClone2[41] = 'https://bigtent.com';
urlListClone2[42] = 'https://foreverymom.com';
urlListClone2[43] = 'https://hometalk.com';
urlListClone2[44] = 'http://allrecipes.com/recipes/721/world-cuisine/european/french/';
urlListClone2[45] = 'http://www.foodnetwork.com/topics/french/';
urlListClone2[46] = 'https://www.thespruce.com/french-food-4128444';
urlListClone2[47] = 'https://www.amazon.com/Mastering-Art-French-Cooking-1/dp/0394721780';
urlListClone2[48] = 'https://www.saveur.com/tags/french-recipes';
urlListClone2[49] = 'http://frenchcookingfordummies.com/';
urlListClone2[50] = 'https://www.easy-french-food.com/';
urlListClone2[51] = 'https://www.bettycrocker.com/recipes/global-cuisine/french-recipes';
urlListClone2[52] = 'http://cuisine-france.com/';
urlListClone2[53] = 'http://www.foodandwine.com/slideshows/healthy-french';
urlListClone2[54] = 'https://www.thefrenchcookingacademy.com/';
urlListClone2[55] = 'https://www.expatica.com/fr/insider-views/Top-10-French-foods-with-recipes_106720.html';
urlListClone2[56] = 'http://www.foodnetwork.com/recipes/articles/french-glossary';
urlListClone2[57] = 'http://www.french-cooking.com/';
urlListClone2[58] = 'https://www.easy-french-food.com/french-cooking.html';
urlListClone2[59] = 'http://www.slate.com/articles/life/food/2009/08/dont_buy_julia_childs_mastering_the_art_of_french_cooking.html';
urlListClone2[60] = 'http://www.newworldencyclopedia.org/entry/French_cuisine';
urlListClone2[61] = 'http://www.delish.com/cooking/g2095/easy-french-recipes/';
urlListClone2[62] = 'https://www.buzzfeed.com/marietelling/44-classic-french-meals-you-need-to-try-before-you-die';
urlListClone2[63] = 'https://www.saveur.com/classic-french-recipes';
urlListClone2[64] = 'https://www.thespruce.com/basics-of-french-cooking-1375352';
urlListClone2[65] = 'https://www.thespruce.com/introduction-to-french-food-and-cooking-1375348';
urlListClone2[66] = 'https://recipes.howstuffworks.com/menus/french-cooking-101.htm';
urlListClone2[67] = 'http://www.nextavenue.org/7-top-websites-nonprofit-jobs/';
urlListClone2[68] = 'https://money.usnews.com/money/blogs/outside-voices-careers/2014/03/26/thinking-about-a-nonprofit-job-heres-what-you-should-know';
urlListClone2[69] = 'https://www.idealist.org/en/?radius=40000&sort=relevance&type=ALL';
urlListClone2[70] = 'https://www.huffingtonpost.com/2013/03/30/non-profit-jobs-how-to-get-a-job_n_2979386.html';
urlListClone2[71] = 'https://www.themuse.com/advice/how-to-break-into-nonprofit-work';
urlListClone2[72] = 'https://idealistcareers.org/top-10-myths-about-working-in-the-nonprofit-sector/';
urlListClone2[73] = 'https://www.theatlantic.com/business/archive/2016/08/the-plight-of-the-overworked-nonprofit-employee/497081/';
urlListClone2[74] = 'https://www.independentsector.org/about/the-charitable-sector/';
urlListClone2[75] = 'https://www.urban.org/research/publication/nonprofit-sector-brief-2015-public-charities-giving-and-volunteering';
urlListClone2[76] = 'https://www.councilofnonprofits.org/nonprofit-sector-trends';
urlListClone2[77] = 'https://www.councilofnonprofits.org/what-is-a-nonprofit';
urlListClone2[78] = 'https://topnonprofits.com/lists/best-nonprofits-on-the-web/';
urlListClone2[79] = 'https://hbr.org/2016/05/what-the-nonprofit-sector-needs-to-reach-its-full-potential';
urlListClone2[80] = 'https://www.google.com/search?q=volunteering';
urlListClone2[81] = 'https://www.google.com/search?q=volunteer+career';
urlListClone2[82] = 'https://www.google.com/search?q=nonprofit+career';
urlListClone2[83] = 'https://www.google.com/search?q=volunteer+sector';
urlListClone2[84] = 'https://www.google.com/search?q=french+chef';
urlListClone2[85] = 'https://www.google.com/search?q=french+cooking+technique';
urlListClone2[86] = 'https://www.google.com/search?q=france+cuisine';
urlListClone2[87] = 'https://www.google.com/search?q=famous+frech+cooks';
urlListClone2[88] = 'https://www.google.com/search?q=cooking+france';
urlListClone2[89] = 'https://www.google.com/search?q=liberal+politics';
urlListClone2[90] = 'https://www.google.com/search?q=married+woman';
urlListClone2[91] = 'https://www.google.com/search?q=female+activist';
urlListClone2[92] = 'https://www.google.com/search?q=nonprofit+work';
urlListClone2[93] = 'https://www.google.com/search?q=red+cross+donation';
urlListClone2[94] = 'https://www.google.com/search?q=goodwill+donation';
urlListClone2[95] = 'https://www.google.com/search?q=volunteer+websites';
urlListClone2[96] = 'https://www.google.com/search?q=nonprofit+sector';
urlListClone2[97] = 'https://www.google.com/search?q=nonprofit+business';
urlListClone2[98] = 'https://www.google.com/search?q=nonprofit+board';
urlListClone2[99] = 'https://www.google.com/search?q=nonprofit+organization';
urlListClone2[100] = 'https://www.google.com/search?q=volunteers+of+america';
urlListClone2[101] = 'https://www.google.com/search?q=volunteermatch';
urlListClone2[102] = 'https://www.google.com/search?q=volunteer+connection';
urlListClone2[103] = 'https://www.google.com/search?q=cooking+equipment';
urlListClone2[104] = 'https://www.google.com/search?q=cooking+games';
urlListClone2[105] = 'https://www.google.com/search?q=cooking+time';
urlListClone2[106] = 'https://www.google.com/search?q=cooking+light+recipes';
urlListClone2[107] = 'https://www.google.com/search?q=cooking+channel';
urlListClone2[108] = 'https://www.google.com/search?q=cooking+equipment';
urlListClone2[109] = 'https://www.google.com/search?q=married+mom+photos';
urlListClone2[110] = 'https://www.google.com/search?q=mom+supplies';
urlListClone2[111] = 'https://www.google.com/search?q=mom+support';
urlListClone2[112] = 'https://www.google.com/search?q=mom+supermarket';
urlListClone2[113] = 'https://www.google.com/search?q=motherhood';
urlListClone2[114] = 'https://www.google.com/search?q=mom+household';
urlListClone2[115] = 'https://www.google.com/search?q=mom+budget';
urlListClone2[116] = 'https://www.google.com/search?q=mom+schedule';
urlListClone2[117] = 'https://www.google.com/search?q=married+with+children+mom';
urlListClone2[118] = 'https://www.google.com/search?q=mom+with+kids';
urlListClone2[119] = 'https://www.bing.com/search?q=volunteering';
urlListClone2[120] = 'https://www.bing.com/search?q=volunteer+career';
urlListClone2[121] = 'https://www.bing.com/search?q=nonprofit+career';
urlListClone2[122] = 'https://www.bing.com/search?q=volunteer+sector';
urlListClone2[123] = 'https://www.bing.com/search?q=french+chef';
urlListClone2[124] = 'https://www.bing.com/search?q=french+cooking+technique';
urlListClone2[125] = 'https://www.bing.com/search?q=france+cuisine';
urlListClone2[126] = 'https://www.bing.com/search?q=famous+frech+cooks';
urlListClone2[127] = 'https://www.bing.com/search?q=cooking+france';
urlListClone2[128] = 'https://www.bing.com/search?q=liberal+politics';
urlListClone2[129] = 'https://www.bing.com/search?q=married+woman';
urlListClone2[130] = 'https://www.bing.com/search?q=female+activist';
urlListClone2[131] = 'https://www.bing.com/search?q=nonprofit+work';
urlListClone2[132] = 'https://www.bing.com/search?q=red+cross+donation';
urlListClone2[133] = 'https://www.bing.com/search?q=goodwill+donation';
urlListClone2[134] = 'https://www.bing.com/search?q=volunteer+websites';
urlListClone2[135] = 'https://www.bing.com/search?q=nonprofit+sector';
urlListClone2[136] = 'https://www.bing.com/search?q=nonprofit+business';
urlListClone2[137] = 'https://www.bing.com/search?q=nonprofit+board';
urlListClone2[138] = 'https://www.bing.com/search?q=nonprofit+organization';
urlListClone2[139] = 'https://www.bing.com/search?q=volunteers+of+america';
urlListClone2[140] = 'https://www.bing.com/search?q=volunteermatch';
urlListClone2[141] = 'https://www.bing.com/search?q=volunteer+connection';
urlListClone2[142] = 'https://www.bing.com/search?q=cooking+equipment';
urlListClone2[143] = 'https://www.bing.com/search?q=cooking+games';
urlListClone2[144] = 'https://www.bing.com/search?q=cooking+time';
urlListClone2[145] = 'https://www.bing.com/search?q=cooking+light+recipes';
urlListClone2[146] = 'https://www.bing.com/search?q=cooking+channel';
urlListClone2[147] = 'https://www.bing.com/search?q=cooking+equipment';
urlListClone2[148] = 'https://www.bing.com/search?q=married+mom+photos';
urlListClone2[149] = 'https://www.bing.com/search?q=mom+supplies';
urlListClone2[150] = 'https://www.bing.com/search?q=mom+support';
urlListClone2[151] = 'https://www.bing.com/search?q=mom+supermarket';
urlListClone2[152] = 'https://www.bing.com/search?q=motherhood';
urlListClone2[153] = 'https://www.bing.com/search?q=mom+household';
urlListClone2[154] = 'https://www.bing.com/search?q=mom+budget';
urlListClone2[155] = 'https://www.bing.com/search?q=mom+schedule';
urlListClone2[156] = 'https://www.bing.com/search?q=married+with+children+mom';
urlListClone2[157] = 'https://www.bing.com/search?q=mom+with+kids';
urlListClone2[158] = 'https://search.yahoo.com/search?q=volunteering';
urlListClone2[159] = 'https://search.yahoo.com/search?q=volunteer+career';
urlListClone2[160] = 'https://search.yahoo.com/search?q=nonprofit+career';
urlListClone2[161] = 'https://search.yahoo.com/search?q=volunteer+sector';
urlListClone2[162] = 'https://search.yahoo.com/search?q=french+chef';
urlListClone2[163] = 'https://search.yahoo.com/search?q=french+cooking+technique';
urlListClone2[164] = 'https://search.yahoo.com/search?q=france+cuisine';
urlListClone2[165] = 'https://search.yahoo.com/search?q=famous+frech+cooks';
urlListClone2[166] = 'https://search.yahoo.com/search?q=cooking+france';
urlListClone2[167] = 'https://search.yahoo.com/search?q=liberal+politics';
urlListClone2[168] = 'https://search.yahoo.com/search?q=married+woman';
urlListClone2[169] = 'https://search.yahoo.com/search?q=female+activist';
urlListClone2[170] = 'https://search.yahoo.com/search?q=nonprofit+work';
urlListClone2[171] = 'https://search.yahoo.com/search?q=red+cross+donation';
urlListClone2[172] = 'https://search.yahoo.com/search?q=goodwill+donation';
urlListClone2[173] = 'https://search.yahoo.com/search?q=volunteer+websites';
urlListClone2[174] = 'https://search.yahoo.com/search?q=nonprofit+sector';
urlListClone2[175] = 'https://search.yahoo.com/search?q=nonprofit+business';
urlListClone2[176] = 'https://search.yahoo.com/search?q=nonprofit+board';
urlListClone2[177] = 'https://search.yahoo.com/search?q=nonprofit+organization';
urlListClone2[178] = 'https://search.yahoo.com/search?q=volunteers+of+america';
urlListClone2[179] = 'https://search.yahoo.com/search?q=volunteermatch';
urlListClone2[180] = 'https://search.yahoo.com/search?q=volunteer+connection';
urlListClone2[181] = 'https://search.yahoo.com/search?q=cooking+equipment';
urlListClone2[182] = 'https://search.yahoo.com/search?q=cooking+games';
urlListClone2[183] = 'https://search.yahoo.com/search?q=cooking+time';
urlListClone2[184] = 'https://search.yahoo.com/search?q=cooking+light+recipes';
urlListClone2[185] = 'https://search.yahoo.com/search?q=cooking+channel';
urlListClone2[186] = 'https://search.yahoo.com/search?q=cooking+equipment';
urlListClone2[187] = 'https://search.yahoo.com/search?q=married+mom+photos';
urlListClone2[188] = 'https://search.yahoo.com/search?q=mom+supplies';
urlListClone2[189] = 'https://search.yahoo.com/search?q=mom+support';
urlListClone2[190] = 'https://search.yahoo.com/search?q=mom+supermarket';
urlListClone2[191] = 'https://search.yahoo.com/search?q=motherhood';
urlListClone2[192] = 'https://search.yahoo.com/search?q=mom+household';
urlListClone2[193] = 'https://search.yahoo.com/search?q=mom+budget';
urlListClone2[194] = 'https://search.yahoo.com/search?q=mom+schedule';
urlListClone2[195] = 'https://search.yahoo.com/search?q=married+with+children+mom';
urlListClone2[196] = 'https://search.yahoo.com/search?q=mom+with+kids';

urlListClone3[0] = 'http://www.sheknows.com/health-and-wellness/articles/822709/10-tips-for-getting-your-couch-potato-guy-off-the-couch';
urlListClone3[1] = 'https://personalexcellence.co/blog/stop-watching-tv/';
urlListClone3[2] = 'http://www.myeasytv.com/';
urlListClone3[3] = 'http://www.thetvjunkies.com/';
urlListClone3[4] = 'https://www.etsy.com/market/tv_junkie';
urlListClone3[5] = 'http://www.crunkfeministcollective.com/2011/08/18/confessions-of-a-reality-tv-junkie/';
urlListClone3[6] = 'http://tvshowjunky.com/';
urlListClone3[7] = 'https://www.tumblr.com/search/tv%20junkie';
urlListClone3[8] = 'http://www.realitytvworld.com/';
urlListClone3[9] = 'http://www.eonline.com/news/reality_tv';
urlListClone3[10] = 'https://www.huffingtonpost.com/topic/reality-tv';
urlListClone3[11] = 'http://www.tv.com/shows/category/reality/';
urlListClone3[12] = 'http://www.hollywoodreporter.com/features/reality-tv-roundtable-leah-remini-rupaul-breaking-points-facing-haters-1011639';
urlListClone3[13] = 'https://nplusonemag.com/issue-3/reviews/reality-reality-television/';
urlListClone3[14] = 'https://www.michaeldpollock.com/how-i-overcame-tv-addiction/';
urlListClone3[15] = 'https://www.rd.com/health/wellness/television-addiction/';
urlListClone3[16] = 'http://www.elle.com/beauty/health-fitness/advice/a11242/television-addiction-the-effects-of-watching-too-much-tv-449606/';
urlListClone3[17] = 'https://www.allaboutlifechallenges.org/television-addiction.htm';
urlListClone3[18] = 'https://www.powerofpositivity.com/10-ways-break-tv-addiction/';
urlListClone3[19] = 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4114517/';
urlListClone3[20] = 'https://zenhabits.net/addiction/';
urlListClone3[21] = 'https://www.dol.gov/general/topic/unemployment-insurance';
urlListClone3[22] = 'https://data.bls.gov/timeseries/LNS14000000';
urlListClone3[23] = 'https://www.bls.gov/web/laus/laumstrk.htm';
urlListClone3[24] = 'https://www.theatlantic.com/business/archive/2013/04/the-terrifying-reality-of-long-term-unemployment/274957/';
urlListClone3[25] = 'https://www.forbes.com/sites/louisefron/2014/08/20/tackling-the-real-unemployment-rate-12-6/#49adfe9b2473';
urlListClone3[26] = 'https://www.stratfor.com/weekly/europe-unemployment-and-instability';
urlListClone3[27] = 'http://ui.nv.gov/';
urlListClone3[28] = 'http://www.investopedia.com/terms/u/unemployment.asp';
urlListClone3[29] = 'https://uiclaims.des.ky.gov/ebenefit/eben.htm';
urlListClone3[30] = 'https://uionline.detma.org/Claimant/Core/Login.ASPX';
urlListClone3[31] = 'http://workforcewv.org/unemployment/claimants.html';
urlListClone3[32] = 'https://fred.stlouisfed.org/series/UNRATE';
urlListClone3[33] = 'https://unemployment.cmt.ohio.gov/cmtview/loginc.jsp';
urlListClone3[34] = 'http://jfs.ohio.gov/ouc/';
urlListClone3[35] = 'https://does.dc.gov/service/start-your-unemployment-compensation-process';
urlListClone3[36] = 'https://www.amazon.com/Unemployed-Worker-Making-Living-without/dp/B0006DB2US';
urlListClone3[37] = 'https://www.huffingtonpost.com/ira-wolfe/why-many-unemployment_b_5273611.html';
urlListClone3[38] = 'https://www.indeed.com/q-Unemployed-Workers-jobs.html';
urlListClone3[39] = 'http://www.investopedia.com/terms/d/discouraged_worker.asp';
urlListClone3[40] = 'http://www.njcaa.org/landing/index';
urlListClone3[41] = 'https://financialaid.santarosa.edu/';
urlListClone3[42] = 'https://www.jc.um.edu.mt/';
urlListClone3[43] = 'https://www.ojc.edu/futurestudents/admissions/apply-ojc.aspx';
urlListClone3[44] = 'http://www.gonjc.com/landing/index';
urlListClone3[45] = 'http://www.jjc.edu/human-resources/Pages/employment.aspx';
urlListClone3[46] = 'https://www.wcjc.edu/Programs/';
urlListClone3[47] = 'http://www.jcjc.edu/new2jones.php';
urlListClone3[48] = 'https://www.tjc.edu/onlinedegrees';
urlListClone3[49] = 'http://www.parisjc.edu/index.php/pjc2/employment';
urlListClone3[50] = 'http://family.findlaw.com/divorce/how-to-divorce.html';
urlListClone3[51] = 'http://www.courts.ca.gov/selfhelp-divorce.htm';
urlListClone3[52] = 'https://www.psychologytoday.com/basics/divorce';
urlListClone3[53] = 'https://www.sciencealert.com/7-things-that-predict-divorce-according-to-science';
urlListClone3[54] = 'https://www.scientificamerican.com/article/is-divorce-bad-for-children/';
urlListClone3[55] = 'https://www.smithsonianmag.com/history/heartbreaking-history-of-divorce-180949439/';
urlListClone3[56] = 'https://www.theatlantic.com/health/archive/2014/10/the-divorce-proof-marriage/381401/';
urlListClone3[57] = 'https://www.huffingtonpost.com/section/divorce';
urlListClone3[58] = 'https://www.justia.com/family/divorce/';
urlListClone3[59] = 'https://www.rocketlawyer.com/divorce.rl';
urlListClone3[60] = 'http://www.scmp.com/news/china/society/article/2117424/why-millions-chinese-people-are-filing-divorce-every-year';
urlListClone3[61] = 'http://www.apa.org/topics/divorce/';
urlListClone3[62] = 'http://www.businessinsider.com/how-to-know-if-your-marriage-will-end-in-divorce-according-to-science-2017-10';
urlListClone3[63] = 'http://www.familylawselfhelpcenter.org/self-help/divorce';
urlListClone3[64] = 'https://www.theatlantic.com/international/archive/2017/02/what-is-populist-trump/516525/';
urlListClone3[65] = 'https://www.newyorker.com/magazine/2015/09/07/the-populists';
urlListClone3[66] = 'http://time.com/time-person-of-the-year-populism/';
urlListClone3[67] = 'https://www.theguardian.com/politics/2016/oct/13/birth-of-populism-donald-trump';
urlListClone3[68] = 'https://www.theguardian.com/commentisfree/2017/oct/30/europe-centre-right-wrong-track-good-populism-nativism';
urlListClone3[69] = 'https://www.washingtonpost.com/news/monkey-cage/wp/2016/03/11/its-not-just-trump-authoritarian-populism-is-rising-across-the-west-heres-why/?utm_term=.31bdc2aac44f';
urlListClone3[70] = 'http://www.slate.com/articles/news_and_politics/interrogation/2016/02/is_donald_trump_a_populist.html';
urlListClone3[71] = 'https://www.theatlantic.com/politics/archive/2016/07/populism-american-right/489800/';
urlListClone3[72] = 'https://www.trump.com/biography/';
urlListClone3[73] = 'http://www.chicagotribune.com/news/opinion/commentary/ct-manafort-donald-trump-tweets-20171030-story.html';
urlListClone3[74] = 'http://time.com/time-person-of-the-year-2016-donald-trump/';
urlListClone3[75] = 'https://www.theatlantic.com/magazine/archive/2017/10/will-donald-trump-destroy-the-presidency/537921/';
urlListClone3[76] = 'http://www.rollingstone.com/politics/features/taibbi-madness-of-donald-trump-removal-25th-amendment-w504149';
urlListClone3[77] = 'https://www.donaldjtrump.com/';
urlListClone3[78] = 'http://thehill.com/people/donald-trump';
urlListClone3[79] = 'https://www.instagram.com/realdonaldtrump/?hl=en';
urlListClone3[80] = 'http://www.washingtonexaminer.com/section/donald-trump';
urlListClone3[81] = 'https://www.politico.com/news/donald-trump';
urlListClone3[82] = 'http://people.com/tag/donald-trump/';
urlListClone3[83] = 'http://www.washingtontimes.com/topics/donald-trump/';
urlListClone3[84] = 'https://www.bing.com/search?q=populist+movement';
urlListClone3[85] = 'https://www.bing.com/search?q=populism+politics';
urlListClone3[86] = 'https://www.bing.com/search?q=make+america+great';
urlListClone3[87] = 'https://www.bing.com/search?q=television+actors';
urlListClone3[88] = 'https://www.bing.com/search?q=television+shows';
urlListClone3[89] = 'https://www.bing.com/search?q=primetime+tv';
urlListClone3[90] = 'https://www.bing.com/search?q=football+tv';
urlListClone3[91] = 'https://www.bing.com/search?q=sports+video';
urlListClone3[92] = 'https://www.bing.com/search?q=basketball+college';
urlListClone3[93] = 'https://www.bing.com/search?q=junior+college+highlights';
urlListClone3[94] = 'https://www.bing.com/search?q=divorce+help';
urlListClone3[95] = 'https://www.bing.com/search?q=getting+divorced';
urlListClone3[96] = 'https://www.bing.com/search?q=unemployment+benefits';
urlListClone3[97] = 'https://www.bing.com/search?q=unemployment+help';
urlListClone3[98] = 'https://www.bing.com/search?q=unemployment+insurance';
urlListClone3[99] = 'https://www.bing.com/search?q=online+dating';
urlListClone3[100] = 'https://www.bing.com/search?q=too+much+tv';
urlListClone3[101] = 'https://www.bing.com/search?q=too+much+television';
urlListClone3[102] = 'https://www.bing.com/search?q=popular+television';
urlListClone3[103] = 'https://www.bing.com/search?q=losing+weight';
urlListClone3[104] = 'https://www.bing.com/search?q=beer+belly';
urlListClone3[105] = 'https://www.bing.com/search?q=monday+night+football';
urlListClone3[106] = 'https://www.bing.com/search?q=best+television+shows';
urlListClone3[107] = 'https://www.bing.com/search?q=beer+commercials';
urlListClone3[108] = 'https://www.bing.com/search?q=i+am+a+couch+potato';
urlListClone3[109] = 'https://www.bing.com/search?q=snack+foods';
urlListClone3[110] = 'https://www.bing.com/search?q=football+barbecue';
urlListClone3[111] = 'https://www.bing.com/search?q=college+football+season';
urlListClone3[112] = 'https://www.bing.com/search?q=junk+food+television';
urlListClone3[113] = 'https://www.bing.com/search?q=junk+television';
urlListClone3[114] = 'https://www.bing.com/search?q=stop+television';
urlListClone3[115] = 'https://www.bing.com/search?q=hours+watching+tv';
urlListClone3[116] = 'https://www.bing.com/search?q=support+donald+trump';
urlListClone3[117] = 'https://www.bing.com/search?q=support+conversative+politics';
urlListClone3[118] = 'https://www.bing.com/search?q=television+comedies';
urlListClone3[119] = 'https://www.bing.com/search?q=netflix+movies';
urlListClone3[120] = 'https://www.bing.com/search?q=food+shows';
urlListClone3[121] = 'https://www.bing.com/search?q=rush+limbaugh';
urlListClone3[122] = 'https://www.bing.com/search?q=fox+news';
urlListClone3[123] = 'https://www.bing.com/search?q=rupert+murdoch';
urlListClone3[124] = 'https://search.yahoo.com/search?q=populist+movement';
urlListClone3[125] = 'https://search.yahoo.com/search?q=populism+politics';
urlListClone3[126] = 'https://search.yahoo.com/search?q=make+america+great';
urlListClone3[127] = 'https://search.yahoo.com/search?q=television+actors';
urlListClone3[128] = 'https://search.yahoo.com/search?q=television+shows';
urlListClone3[129] = 'https://search.yahoo.com/search?q=primetime+tv';
urlListClone3[130] = 'https://search.yahoo.com/search?q=football+tv';
urlListClone3[131] = 'https://search.yahoo.com/search?q=sports+video';
urlListClone3[132] = 'https://search.yahoo.com/search?q=basketball+college';
urlListClone3[133] = 'https://search.yahoo.com/search?q=junior+college+highlights';
urlListClone3[134] = 'https://search.yahoo.com/search?q=divorce+help';
urlListClone3[135] = 'https://search.yahoo.com/search?q=getting+divorced';
urlListClone3[136] = 'https://search.yahoo.com/search?q=unemployment+benefits';
urlListClone3[137] = 'https://search.yahoo.com/search?q=unemployment+help';
urlListClone3[138] = 'https://search.yahoo.com/search?q=unemployment+insurance';
urlListClone3[139] = 'https://search.yahoo.com/search?q=online+dating';
urlListClone3[140] = 'https://search.yahoo.com/search?q=too+much+tv';
urlListClone3[141] = 'https://search.yahoo.com/search?q=too+much+television';
urlListClone3[142] = 'https://search.yahoo.com/search?q=popular+television';
urlListClone3[143] = 'https://search.yahoo.com/search?q=losing+weight';
urlListClone3[144] = 'https://search.yahoo.com/search?q=beer+belly';
urlListClone3[145] = 'https://search.yahoo.com/search?q=monday+night+football';
urlListClone3[146] = 'https://search.yahoo.com/search?q=best+television+shows';
urlListClone3[147] = 'https://search.yahoo.com/search?q=beer+commercials';
urlListClone3[148] = 'https://search.yahoo.com/search?q=i+am+a+couch+potato';
urlListClone3[149] = 'https://search.yahoo.com/search?q=snack+foods';
urlListClone3[150] = 'https://search.yahoo.com/search?q=football+barbecue';
urlListClone3[151] = 'https://search.yahoo.com/search?q=college+football+season';
urlListClone3[152] = 'https://search.yahoo.com/search?q=junk+food+television';
urlListClone3[153] = 'https://search.yahoo.com/search?q=junk+television';
urlListClone3[154] = 'https://search.yahoo.com/search?q=stop+television';
urlListClone3[155] = 'https://search.yahoo.com/search?q=hours+watching+tv';
urlListClone3[156] = 'https://search.yahoo.com/search?q=support+donald+trump';
urlListClone3[157] = 'https://search.yahoo.com/search?q=support+conversative+politics';
urlListClone3[158] = 'https://search.yahoo.com/search?q=television+comedies';
urlListClone3[159] = 'https://search.yahoo.com/search?q=netflix+movies';
urlListClone3[160] = 'https://search.yahoo.com/search?q=food+shows';
urlListClone3[161] = 'https://search.yahoo.com/search?q=rush+limbaugh';
urlListClone3[162] = 'https://search.yahoo.com/search?q=fox+news';
urlListClone3[163] = 'https://search.yahoo.com/search?q=rupert+murdoch';
urlListClone3[164] = 'https://www.google.com/search?q=populist+movement';
urlListClone3[165] = 'https://www.google.com/search?q=populism+politics';
urlListClone3[166] = 'https://www.google.com/search?q=make+america+great';
urlListClone3[167] = 'https://www.google.com/search?q=television+actors';
urlListClone3[168] = 'https://www.google.com/search?q=television+shows';
urlListClone3[169] = 'https://www.google.com/search?q=primetime+tv';
urlListClone3[170] = 'https://www.google.com/search?q=football+tv';
urlListClone3[171] = 'https://www.google.com/search?q=sports+video';
urlListClone3[172] = 'https://www.google.com/search?q=basketball+college';
urlListClone3[173] = 'https://www.google.com/search?q=junior+college+highlights';
urlListClone3[174] = 'https://www.google.com/search?q=divorce+help';
urlListClone3[175] = 'https://www.google.com/search?q=getting+divorced';
urlListClone3[176] = 'https://www.google.com/search?q=unemployment+benefits';
urlListClone3[177] = 'https://www.google.com/search?q=unemployment+help';
urlListClone3[178] = 'https://www.google.com/search?q=unemployment+insurance';
urlListClone3[179] = 'https://www.google.com/search?q=too+much+tv';
urlListClone3[180] = 'https://www.google.com/search?q=too+much+television';
urlListClone3[181] = 'https://www.google.com/search?q=popular+television';
urlListClone3[182] = 'https://www.google.com/search?q=losing+weight';
urlListClone3[183] = 'https://www.google.com/search?q=beer+belly';
urlListClone3[184] = 'https://www.google.com/search?q=monday+night+football';
urlListClone3[185] = 'https://www.google.com/search?q=best+television+shows';
urlListClone3[186] = 'https://www.google.com/search?q=beer+commercials';
urlListClone3[187] = 'https://www.google.com/search?q=i+am+a+couch+potato';
urlListClone3[188] = 'https://www.google.com/search?q=snack+foods';
urlListClone3[189] = 'https://www.google.com/search?q=football+barbecue';
urlListClone3[190] = 'https://www.google.com/search?q=college+football+season';
urlListClone3[191] = 'https://www.google.com/search?q=junk+food+television';
urlListClone3[192] = 'https://www.google.com/search?q=junk+television';
urlListClone3[193] = 'https://www.google.com/search?q=stop+television';
urlListClone3[194] = 'https://www.google.com/search?q=hours+watching+tv';
urlListClone3[195] = 'https://www.google.com/search?q=support+donald+trump';
urlListClone3[196] = 'https://www.google.com/search?q=support+conversative+politics';
urlListClone3[197] = 'https://www.google.com/search?q=television+comedies';
urlListClone3[198] = 'https://www.google.com/search?q=netflix+movies';
urlListClone3[199] = 'https://www.google.com/search?q=food+shows';
urlListClone3[200] = 'https://www.google.com/search?q=rush+limbaugh';
urlListClone3[201] = 'https://www.google.com/search?q=fox+news';
urlListClone3[202] = 'https://www.google.com/search?q=rupert+murdoch';

urlListClone4[0] = 'https://www.usnews.com/education/best-high-schools';
urlListClone4[1] = 'http://www.maxpreps.com/';
urlListClone4[2] = 'http://www.dailynews.com/sports/high-school-sports/';
urlListClone4[3] = 'http://usatodayhss.com/';
urlListClone4[4] = 'http://www.wfaa.com/hss';
urlListClone4[5] = 'http://www.pressherald.com/sports/highschoolsports/';
urlListClone4[6] = 'http://www.bostonherald.com/sports/high_school';
urlListClone4[7] = 'https://www.khanacademy.org/test-prep/sat';
urlListClone4[8] = 'https://collegereadiness.collegeboard.org/sat/practice';
urlListClone4[9] = 'https://www.princetonreview.com/college/sat-selfguided-course';
urlListClone4[10] = 'https://www.prepscholar.com/sat/s/';
urlListClone4[11] = 'https://sat.magoosh.com/';
urlListClone4[12] = 'https://www.kaptest.com/sat';
urlListClone4[13] = 'https://www.theatlantic.com/education/archive/2014/03/the-sat-prep-industry-isnt-going-anywhere/284430/';
urlListClone4[14] = 'http://www.reuters.com/investigates/special-report/college-sat-two/';
urlListClone4[15] = 'https://www.avclub.com/the-biggest-name-in-video-game-horror-never-made-horror-1819921166';
urlListClone4[16] = 'https://www.gamestop.com/collection/upcoming-video-games';
urlListClone4[17] = 'https://www.walmart.com/cp/video-games/2636';
urlListClone4[18] = 'http://www.metacritic.com/browse/games/release-date/new-releases/all/date';
urlListClone4[19] = 'https://www.polygon.com/2017/10/29/16507224/video-game-releases-for-november-2017';
urlListClone4[20] = 'http://www.videogameslive.com/index.php?s=home';
urlListClone4[21] = 'http://time.com/4458554/best-video-games-all-time/';
urlListClone4[22] = 'http://www.slate.com/articles/technology/future_tense/2015/11/how_video_games_can_teach_your_brain_to_fight_depression.html';
urlListClone4[23] = 'http://www.vulture.com/article/100-hardest-video-game-bosses-ranked.html';
urlListClone4[24] = 'http://www.businessinsider.com/roblox-xbox-one-cross-platform-play-microsoft-2017-10';
urlListClone4[25] = 'http://www.addictinggames.com/';
urlListClone4[26] = 'http://www.freearcade.com/';
urlListClone4[27] = 'https://www.lego.com/en-us/games';
urlListClone4[28] = 'https://www.gamefly.com/#!/';
urlListClone4[29] = 'http://www.thinkgeek.com/video-games/';
urlListClone4[30] = 'https://www.toysrus.com/products/video-games.jsp';
urlListClone4[31] = 'https://www.cnet.com/games/';
urlListClone4[32] = 'https://www.sciencedaily.com/news/computers_math/video_games/';
urlListClone4[33] = 'http://fortune.com/2015/02/24/10-successful-states-video-game-development/';
urlListClone4[34] = 'https://electronics.howstuffworks.com/video-game-development-channel.htm';
urlListClone4[35] = 'https://www.schools.com/programs/video-game-development';
urlListClone4[36] = 'http://www.apa.org/gradpsych/2012/01/hot-careers.aspx';
urlListClone4[37] = 'https://www.payscale.com/research/US/Job=Video_Game_Designer/Salary';
urlListClone4[38] = 'https://www.internationalstudent.com/study-video-game-development/';
urlListClone4[39] = 'https://www.coursera.org/specializations/game-development';
urlListClone4[40] = 'https://unity3d.com/';
urlListClone4[41] = 'http://www.excite.com/education/art-design/video-game-design';
urlListClone4[42] = 'https://www.schools.com/visuals/how-to-become-a-game-designer.html';
urlListClone4[43] = 'https://gamasutra.com/';
urlListClone4[44] = 'https://www.snagajob.com/jobs-for-high-school-students';
urlListClone4[45] = 'https://www.monster.com/jobs/q-high-school-student-jobs.aspx';
urlListClone4[46] = 'http://highschooljobs.jobsearchbby.com/';
urlListClone4[47] = 'https://www.thebalance.com/job-search-tips-for-high-school-students-2060904';
urlListClone4[48] = 'https://www.moneycrashers.com/part-time-jobs-high-school-students/';
urlListClone4[49] = 'https://education.cu-portland.edu/blog/news/high-school-student-jobs/';
urlListClone4[50] = 'http://www.ecampustours.com/for-students/career-exploration/building-your-resume/benefits-of-working-a-part-time-job-in-high-school#.Wfimz1tSzIU';
urlListClone4[51] = 'https://talentegg.ca/incubator/2013/08/26/6-benefits-of-a-having-a-part-time-job-at-school/';
urlListClone4[52] = 'https://www.huffingtonpost.com/beth-kobliner/should-high-school-students-have-part-time-jobs_b_3454076.html';
urlListClone4[53] = 'http://www.ascd.org/publications/researchbrief/v3n14/toc.aspx';
urlListClone4[54] = 'https://www.healthychildren.org/English/ages-stages/teen/school/Pages/Making-Friends-in-High-School.aspx';
urlListClone4[55] = 'https://www.psychologytoday.com/blog/the-friendship-doctor/201112/its-tough-making-new-friends-in-high-school';
urlListClone4[56] = 'https://www.wikihow.com/Make-Friends-at-a-New-School';
urlListClone4[57] = 'http://www.gurl.com/2015/09/25/how-to-make-friends-in-high-school-meet-people/';
urlListClone4[58] = 'https://www.quora.com/How-do-I-make-friends-in-high-school';
urlListClone4[59] = 'http://www.gurl.com/2015/08/03/how-to-make-friends-when-youre-a-freshman-in-high-school/';
urlListClone4[60] = 'https://www.teenvogue.com/gallery/how-to-make-friends-in-high-school-shy';
urlListClone4[61] = 'http://www.catalogs.com/info/teens/making-friends-in-high-school.html';
urlListClone4[62] = 'http://www.cyh.com/HealthTopics/HealthTopicDetailsKids.aspx?p=335&id=1705&np=286';
urlListClone4[63] = 'https://www.girlsaskguys.com/family-friends/q2494318-how-can-i-make-friends-in-high-school';
urlListClone4[64] = 'http://www.seventeen.com/love/dating-advice/advice/a11407/how-to-make-new-friends/';
urlListClone4[65] = 'https://lifehacker.com/advice-i-wish-someone-had-given-me-after-graduating-hig-1573178134';
urlListClone4[66] = 'https://www.understood.org/en/friends-feelings/common-challenges/making-keeping-friends/8-ways-to-help-your-middle-schooler-connect-with-other-kids';
urlListClone4[67] = 'https://www.buzzfeed.com/katieheaney/how-to-make-friends-in-middle-school';
urlListClone4[68] = 'https://www.huffingtonpost.com/irene-s-levine/making-new-friends_b_850254.html';
urlListClone4[69] = 'http://lifestyle.allwomenstalk.com/ways-to-make-new-friends-in-high-school';
urlListClone4[70] = 'https://www.bing.com/search?q=video+game+online';
urlListClone4[71] = 'https://www.bing.com/search?q=free+video+games';
urlListClone4[72] = 'https://www.bing.com/search?q=game+hacks';
urlListClone4[73] = 'https://www.bing.com/search?q=video+game+tricks';
urlListClone4[74] = 'https://www.bing.com/search?q=video+gamer';
urlListClone4[75] = 'https://www.bing.com/search?q=video+gaming+careers';
urlListClone4[76] = 'https://www.bing.com/search?q=high+school+gossip';
urlListClone4[77] = 'https://www.bing.com/search?q=high+school+tips';
urlListClone4[78] = 'https://www.bing.com/search?q=high+school+debate';
urlListClone4[79] = 'https://www.bing.com/search?q=high+school+bullying';
urlListClone4[80] = 'https://www.bing.com/search?q=computer+games';
urlListClone4[81] = 'https://www.bing.com/search?q=applying+to+college';
urlListClone4[82] = 'https://www.bing.com/search?q=college+prep';
urlListClone4[83] = 'https://www.bing.com/search?q=part+time+job';
urlListClone4[84] = 'https://www.bing.com/search?q=high+school+job';
urlListClone4[85] = 'https://www.bing.com/search?q=high+school+sports';
urlListClone4[86] = 'https://www.bing.com/search?q=video+game+tickets';
urlListClone4[87] = 'https://www.bing.com/search?q=video+game+console';
urlListClone4[88] = 'https://www.bing.com/search?q=video+games';
urlListClone4[89] = 'https://www.bing.com/search?q=video+game+tricks';
urlListClone4[90] = 'https://www.bing.com/search?q=video+gamer+names';
urlListClone4[91] = 'https://www.bing.com/search?q=video+gamer+jobs';
urlListClone4[92] = 'https://www.bing.com/search?q=video+gamers+anonymous';
urlListClone4[93] = 'https://www.bing.com/search?q=game+software+development';
urlListClone4[94] = 'https://www.bing.com/search?q=game+software+download';
urlListClone4[95] = 'https://www.bing.com/search?q=game+apps';
urlListClone4[96] = 'https://www.bing.com/search?q=game+app+free';
urlListClone4[97] = 'https://www.bing.com/search?q=game+app+android';
urlListClone4[98] = 'https://www.bing.com/search?q=ios+games';
urlListClone4[99] = 'https://www.bing.com/search?q=high+school+students';
urlListClone4[100] = 'https://www.bing.com/search?q=high+school+apps';
urlListClone4[101] = 'https://www.bing.com/search?q=high+school+video+club';
urlListClone4[102] = 'https://www.bing.com/search?q=college+aid';
urlListClone4[103] = 'https://www.bing.com/search?q=college+applications';
urlListClone4[104] = 'https://www.bing.com/search?q=college+test+prep';
urlListClone4[105] = 'https://www.bing.com/search?q=college+scholarships';
urlListClone4[106] = 'https://www.bing.com/search?q=high+school+extra+curriculars';
urlListClone4[107] = 'https://www.google.com/search?q=video+game+online';
urlListClone4[108] = 'https://www.google.com/search?q=free+video+games';
urlListClone4[109] = 'https://www.google.com/search?q=game+hacks';
urlListClone4[110] = 'https://www.google.com/search?q=video+game+tricks';
urlListClone4[111] = 'https://www.google.com/search?q=video+gamer';
urlListClone4[112] = 'https://www.google.com/search?q=video+gaming+careers';
urlListClone4[113] = 'https://www.google.com/search?q=high+school+gossip';
urlListClone4[114] = 'https://www.google.com/search?q=high+school+tips';
urlListClone4[115] = 'https://www.google.com/search?q=high+school+debate';
urlListClone4[116] = 'https://www.google.com/search?q=high+school+bullying';
urlListClone4[117] = 'https://www.google.com/search?q=computer+games';
urlListClone4[118] = 'https://www.google.com/search?q=applying+to+college';
urlListClone4[119] = 'https://www.google.com/search?q=college+prep';
urlListClone4[120] = 'https://www.google.com/search?q=part+time+job';
urlListClone4[121] = 'https://www.google.com/search?q=high+school+job';
urlListClone4[122] = 'https://www.google.com/search?q=high+school+sports';
urlListClone4[123] = 'https://www.google.com/search?q=video+game+tickets';
urlListClone4[124] = 'https://www.google.com/search?q=video+game+console';
urlListClone4[125] = 'https://www.google.com/search?q=video+games';
urlListClone4[126] = 'https://www.google.com/search?q=video+game+tricks';
urlListClone4[127] = 'https://www.google.com/search?q=video+gamer+names';
urlListClone4[128] = 'https://www.google.com/search?q=video+gamer+jobs';
urlListClone4[129] = 'https://www.google.com/search?q=video+gamers+anonymous';
urlListClone4[130] = 'https://www.google.com/search?q=game+software+development';
urlListClone4[131] = 'https://www.google.com/search?q=game+software+download';
urlListClone4[132] = 'https://www.google.com/search?q=game+apps';
urlListClone4[133] = 'https://www.google.com/search?q=game+app+free';
urlListClone4[134] = 'https://www.google.com/search?q=game+app+android';
urlListClone4[135] = 'https://www.google.com/search?q=ios+games';
urlListClone4[136] = 'https://www.google.com/search?q=high+school+students';
urlListClone4[137] = 'https://www.google.com/search?q=high+school+apps';
urlListClone4[138] = 'https://www.google.com/search?q=high+school+video+club';
urlListClone4[139] = 'https://www.google.com/search?q=college+aid';
urlListClone4[140] = 'https://www.google.com/search?q=college+applications';
urlListClone4[141] = 'https://www.google.com/search?q=college+test+prep';
urlListClone4[142] = 'https://www.google.com/search?q=college+scholarships';
urlListClone4[143] = 'https://www.google.com/search?q=high+school+extra+curriculars';
urlListClone4[144] = 'https://search.yahoo.com/search?q=video+game+online';
urlListClone4[145] = 'https://search.yahoo.com/search?q=free+video+games';
urlListClone4[146] = 'https://search.yahoo.com/search?q=game+hacks';
urlListClone4[147] = 'https://search.yahoo.com/search?q=video+game+tricks';
urlListClone4[148] = 'https://search.yahoo.com/search?q=video+gamer';
urlListClone4[149] = 'https://search.yahoo.com/search?q=video+gaming+careers';
urlListClone4[150] = 'https://search.yahoo.com/search?q=high+school+gossip';
urlListClone4[151] = 'https://search.yahoo.com/search?q=high+school+tips';
urlListClone4[152] = 'https://search.yahoo.com/search?q=high+school+debate';
urlListClone4[153] = 'https://search.yahoo.com/search?q=high+school+bullying';
urlListClone4[154] = 'https://search.yahoo.com/search?q=computer+games';
urlListClone4[155] = 'https://search.yahoo.com/search?q=applying+to+college';
urlListClone4[156] = 'https://search.yahoo.com/search?q=college+prep';
urlListClone4[157] = 'https://search.yahoo.com/search?q=part+time+job';
urlListClone4[158] = 'https://search.yahoo.com/search?q=high+school+job';
urlListClone4[159] = 'https://search.yahoo.com/search?q=high+school+sports';
urlListClone4[160] = 'https://search.yahoo.com/search?q=video+game+tickets';
urlListClone4[161] = 'https://search.yahoo.com/search?q=video+game+console';
urlListClone4[162] = 'https://search.yahoo.com/search?q=video+games';
urlListClone4[163] = 'https://search.yahoo.com/search?q=video+game+tricks';
urlListClone4[164] = 'https://search.yahoo.com/search?q=video+gamer+names';
urlListClone4[165] = 'https://search.yahoo.com/search?q=video+gamer+jobs';
urlListClone4[166] = 'https://search.yahoo.com/search?q=video+gamers+anonymous';
urlListClone4[167] = 'https://search.yahoo.com/search?q=game+software+development';
urlListClone4[168] = 'https://search.yahoo.com/search?q=game+software+download';
urlListClone4[169] = 'https://search.yahoo.com/search?q=game+apps';
urlListClone4[170] = 'https://search.yahoo.com/search?q=game+app+free';
urlListClone4[171] = 'https://search.yahoo.com/search?q=game+app+android';
urlListClone4[172] = 'https://search.yahoo.com/search?q=ios+games';
urlListClone4[173] = 'https://search.yahoo.com/search?q=high+school+students';
urlListClone4[174] = 'https://search.yahoo.com/search?q=high+school+apps';
urlListClone4[175] = 'https://search.yahoo.com/search?q=high+school+video+club';
urlListClone4[176] = 'https://search.yahoo.com/search?q=college+aid';
urlListClone4[177] = 'https://search.yahoo.com/search?q=college+applications';
urlListClone4[178] = 'https://search.yahoo.com/search?q=college+test+prep';
urlListClone4[179] = 'https://search.yahoo.com/search?q=college+scholarships';
urlListClone4[180] = 'https://search.yahoo.com/search?q=high+school+extra+curriculars';

urlListClone5[0] = 'https://www.thespruce.com/bartending-tips-for-better-drinks-4105954';
urlListClone5[1] = 'https://www.thespruce.com/service-tips-for-bartenders-760441';
urlListClone5[2] = 'http://www.breakintobartending.com/bartending-tips/';
urlListClone5[3] = 'https://medium.com/@bartendinghelp/bartending-tips-for-beginners-3f3d5fa5788e';
urlListClone5[4] = 'http://blog.typsy.com/tips-for-beginner-bartenders';
urlListClone5[5] = 'http://drinks.seriouseats.com/2012/06/from-behind-the-bar-20-rules-for-bartenders-dos-and-donts-advice.html';
urlListClone5[6] = 'http://www.artofdrink.com/bar/advice-for-new-bartenders';
urlListClone5[7] = 'https://www.thrillist.com/drink/nation/want-to-become-a-bartender-here-are-19-things-you-need-to-know';
urlListClone5[8] = 'https://www.pinterest.com/explore/bartending-tips/';
urlListClone5[9] = 'http://www.shakestir.com/features/id/571/10-tips-for-the-beginner-cocktail-bartender';
urlListClone5[10] = 'http://www.misscharming.com/bartender/tipshintsecrets.htm';
urlListClone5[11] = 'https://www.supercall.com/culture/bartending-tips-for-beginners-common-mistakes';
urlListClone5[12] = 'https://www.wikihow.com/Make-More-Tips-as-a-Bartender';
urlListClone5[13] = 'https://www.thecocktailproject.com/age-gate?destination=tips-and-tricks';
urlListClone5[14] = 'https://firstwefeast.com/drink/2015/03/what-makes-a-good-bartender';
urlListClone5[15] = 'https://www.tipsalcohol.com/';
urlListClone5[16] = 'http://www.drinkfox.com/information/bartender-tricks-and-tips';
urlListClone5[17] = 'http://www.bhg.com/recipes/drinks/wine-cocktails/bar-guide/';
urlListClone5[18] = 'http://allrecipes.com/recipes/133/drinks/cocktails/';
urlListClone5[19] = 'http://www.drinksmixer.com/';
urlListClone5[20] = 'https://www.wikihow.com/Make-Drinks';
urlListClone5[21] = 'http://www.delish.com/entertaining/g2163/summer-cocktails/';
urlListClone5[22] = 'http://www.1001cocktails.com/recipes/most-popular-mixed-drinks.html';
urlListClone5[23] = 'http://drinks.seriouseats.com/2013/05/25-essential-cocktails-everyone-should-know-cocktail-101-easy-mixed-drink-recipes-classic-cocktail-guide.html';
urlListClone5[24] = 'https://www.buzzfeed.com/rachelysanders/easy-two-ingredient-cocktails-anyone-can-make';
urlListClone5[25] = 'https://www.tablespoon.com/posts/20-non-alcoholic-party-drinks-everyone-will-love';
urlListClone5[26] = 'https://www.wikihow.com/Be-a-Hipster-Girl';
urlListClone5[27] = 'https://www.tumblr.com/tagged/hipster-girl';
urlListClone5[28] = 'https://www.etsy.com/search?q=hipster+girls';
urlListClone5[29] = 'https://www.huffingtonpost.com/2012/09/20/hipster-neighborhoods-us-top-10-photos_n_1901884.html';
urlListClone5[30] = 'https://www.huffingtonpost.com/smartertravel/the-worlds-most-hipster-h_b_7936054.html';
urlListClone5[31] = 'https://www.forbes.com/sites/morganbrennan/2012/09/20/americas-hippest-hipster-neighborhoods/#6e78d27bcb38';
urlListClone5[32] = 'https://www.thrillist.com/travel/nation/top-10-hipster-neighborhoods-on-earth-williamsburg-new-york-tops-our-list';
urlListClone5[33] = 'http://www.businessinsider.com/hipster-neighborhoods-around-the-world-2014-10';
urlListClone5[34] = 'https://www.yahoo.com/lifestyle/10-hottest-emerging-neighborhoods-in-america-122179904989.html';
urlListClone5[35] = 'http://pigeonsandplanes.com/in-depth/2013/01/10-albums-that-all-hipsters-love/';
urlListClone5[36] = 'https://www.ranker.com/crowdranked-list/most-hipster-bands';
urlListClone5[37] = 'https://www.vice.com/en_us/article/3bj4j8/hw-the-definitive-guide-to-hipster-music-genres-hipster-week';
urlListClone5[38] = 'http://www.listchallenges.com/is-your-taste-in-music-hipster-enough';
urlListClone5[39] = 'https://www.digitalmusicnews.com/2014/03/05/hipster/';
urlListClone5[40] = 'http://www.laweekly.com/music/the-20-worst-hipster-bands-the-complete-list-2410844';
urlListClone5[41] = 'http://gawker.com/these-are-the-most-hipster-bands-according-to-scienc-1537004860';
urlListClone5[42] = 'https://pitchfork.com/';
urlListClone5[43] = 'http://www.cosmopolitan.com/sex-love/news/a43388/what-its-really-like-to-be-a-bisexual-woman/';
urlListClone5[44] = 'http://www.cosmopolitan.com/sex-love/news/a40576/things-you-should-know-before-dating-a-bisexual-woman/';
urlListClone5[45] = 'https://www.hercampus.com/love/dating/17-things-you-should-know-about-dating-bisexual-girl';
urlListClone5[46] = 'http://www.seventeen.com/love/a32027/things-not-to-say-to-a-bisexual-girl/';
urlListClone5[47] = 'http://www.yourtango.com/201060205/curious-girl-girl-bisexual-gives-advice';
urlListClone5[48] = 'https://www.bustle.com/articles/27381-im-a-bi-woman-married-to-a-man-and-this-is-what-its-like';
urlListClone5[49] = 'https://www.wikihow.com/Date-a-Bisexual-Person';
urlListClone5[50] = 'https://www.etsy.com/c/vintage/clothing';
urlListClone5[51] = 'https://www.unique-vintage.com/clothing.html';
urlListClone5[52] = 'https://www.timeout.com/los-angeles/shopping/best-stores-for-vintage-clothing-in-la';
urlListClone5[53] = 'https://www.buzzfeed.com/mallorymcinnis/vintage-clothes-galore';
urlListClone5[54] = 'https://www.racked.com/2016/11/30/13769482/how-to-start-an-online-vintage-store';
urlListClone5[55] = 'https://intothegloss.com/2015/02/ebay-etsy-vintage-clothing/';
urlListClone5[56] = 'http://stylecaster.com/how-to-buy-vintage-clothing/';
urlListClone5[57] = 'https://www.modcloth.com/shop/vintage-clothing';
urlListClone5[58] = 'http://www.rustyzipper.com/';
urlListClone5[59] = 'https://marketplace.asos.com/boutiques/vintage';
urlListClone5[60] = 'https://www.rosegal.com/vintage-384/';
urlListClone5[61] = 'https://www.pinterest.com/explore/vintage-clothing/';
urlListClone5[62] = 'https://www.unique-vintage.com/';
urlListClone5[63] = 'http://www.lavintage.com/';
urlListClone5[64] = 'http://vintageous.com/';
urlListClone5[65] = 'https://www.newyorkvintage.com/';
urlListClone5[66] = 'http://www.levi.com/US/en_US/features/levis-vintage-clothing';
urlListClone5[67] = 'https://topvintage.net/en/clothing/';
urlListClone5[68] = 'https://www.sammydress.com/Wholesale-Vintage-Dresses-c-343.html';
urlListClone5[69] = 'https://truevintage.com/';
urlListClone5[70] = 'https://www.unique-vintage.com/clothing/dresses.html';
urlListClone5[71] = 'https://www.bing.com/search?q=hipster+clubs';
urlListClone5[72] = 'https://www.bing.com/search?q=bisexual+lifestyle';
urlListClone5[73] = 'https://www.bing.com/search?q=vintage+style';
urlListClone5[74] = 'https://www.bing.com/search?q=vintage+dress';
urlListClone5[75] = 'https://www.bing.com/search?q=vintage+jewelry';
urlListClone5[76] = 'https://www.bing.com/search?q=vintage+clothes';
urlListClone5[77] = 'https://www.bing.com/search?q=bartending';
urlListClone5[78] = 'https://www.bing.com/search?q=female+bartender';
urlListClone5[79] = 'https://www.bing.com/search?q=hipster+woman';
urlListClone5[80] = 'https://www.bing.com/search?q=liberal+politics';
urlListClone5[81] = 'https://www.bing.com/search?q=liberal+progressive';
urlListClone5[82] = 'https://www.bing.com/search?q=liberal+rally';
urlListClone5[83] = 'https://www.bing.com/search?q=hipster+life';
urlListClone5[84] = 'https://www.bing.com/search?q=alcholic+drinks';
urlListClone5[85] = 'https://www.bing.com/search?q=cocktails';
urlListClone5[86] = 'https://www.bing.com/search?q=recent+college+grad';
urlListClone5[87] = 'https://www.bing.com/search?q=twentysomething+female';
urlListClone5[88] = 'https://www.bing.com/search?q=popular+nightclubs';
urlListClone5[89] = 'https://www.bing.com/search?q=dj+festivals';
urlListClone5[90] = 'https://www.bing.com/search?q=glitter+makeup';
urlListClone5[91] = 'https://www.bing.com/search?q=techno+music';
urlListClone5[92] = 'https://www.bing.com/search?q=art+fair';
urlListClone5[93] = 'https://www.bing.com/search?q=feminist+march';
urlListClone5[94] = 'https://www.bing.com/search?q=cocktail+lounge';
urlListClone5[95] = 'https://www.bing.com/search?q=women+liberation';
urlListClone5[96] = 'https://www.bing.com/search?q=female+power';
urlListClone5[97] = 'https://www.bing.com/search?q=woman+march';
urlListClone5[98] = 'https://www.bing.com/search?q=liberal+movement';
urlListClone5[99] = 'https://www.bing.com/search?q=support+elizabeth+warren';
urlListClone5[100] = 'https://www.bing.com/search?q=college+dating+app';
urlListClone5[101] = 'https://www.bing.com/search?q=hipster+app';
urlListClone5[102] = 'https://www.bing.com/search?q=liberal+meetup';
urlListClone5[103] = 'https://www.bing.com/search?q=lgbt+meetup';
urlListClone5[104] = 'https://www.bing.com/search?q=womens+lib';
urlListClone5[105] = 'https://www.bing.com/search?q=gay+pride';
urlListClone5[106] = 'https://www.bing.com/search?q=vote+bernie+sanders';
urlListClone5[107] = 'https://www.bing.com/search?q=vote+for+change';
urlListClone5[108] = 'https://www.bing.com/search?q=bisexual+woman';
urlListClone5[109] = 'https://www.bing.com/search?q=bartender+female';
urlListClone5[110] = 'https://www.bing.com/search?q=bartending+career+tips';
urlListClone5[111] = 'https://www.bing.com/search?q=bartender+tricks';
urlListClone5[112] = 'https://www.bing.com/search?q=bartender+school';
urlListClone5[113] = 'https://www.bing.com/search?q=bartender+app';
urlListClone5[114] = 'https://www.google.com/search?q=hipster+clubs';
urlListClone5[115] = 'https://www.google.com/search?q=bisexual+lifestyle';
urlListClone5[116] = 'https://www.google.com/search?q=vintage+style';
urlListClone5[117] = 'https://www.google.com/search?q=vintage+dress';
urlListClone5[118] = 'https://www.google.com/search?q=vintage+jewelry';
urlListClone5[119] = 'https://www.google.com/search?q=vintage+clothes';
urlListClone5[120] = 'https://www.google.com/search?q=bartending';
urlListClone5[121] = 'https://www.google.com/search?q=female+bartender';
urlListClone5[122] = 'https://www.google.com/search?q=hipster+woman';
urlListClone5[123] = 'https://www.google.com/search?q=liberal+politics';
urlListClone5[124] = 'https://www.google.com/search?q=liberal+progressive';
urlListClone5[125] = 'https://www.google.com/search?q=liberal+rally';
urlListClone5[126] = 'https://www.google.com/search?q=hipster+life';
urlListClone5[127] = 'https://www.google.com/search?q=alcholic+drinks';
urlListClone5[128] = 'https://www.google.com/search?q=cocktails';
urlListClone5[129] = 'https://www.google.com/search?q=recent+college+grad';
urlListClone5[130] = 'https://www.google.com/search?q=twentysomething+female';
urlListClone5[131] = 'https://www.google.com/search?q=popular+nightclubs';
urlListClone5[132] = 'https://www.google.com/search?q=dj+festivals';
urlListClone5[133] = 'https://www.google.com/search?q=glitter+makeup';
urlListClone5[134] = 'https://www.google.com/search?q=techno+music';
urlListClone5[135] = 'https://www.google.com/search?q=art+fair';
urlListClone5[136] = 'https://www.google.com/search?q=feminist+march';
urlListClone5[137] = 'https://www.google.com/search?q=cocktail+lounge';
urlListClone5[138] = 'https://www.google.com/search?q=women+liberation';
urlListClone5[139] = 'https://www.google.com/search?q=female+power';
urlListClone5[140] = 'https://www.google.com/search?q=woman+march';
urlListClone5[141] = 'https://www.google.com/search?q=liberal+movement';
urlListClone5[142] = 'https://www.google.com/search?q=support+elizabeth+warren';
urlListClone5[143] = 'https://www.google.com/search?q=college+dating+app';
urlListClone5[144] = 'https://www.google.com/search?q=hipster+app';
urlListClone5[145] = 'https://www.google.com/search?q=liberal+meetup';
urlListClone5[146] = 'https://www.google.com/search?q=lgbt+meetup';
urlListClone5[147] = 'https://www.google.com/search?q=womens+lib';
urlListClone5[148] = 'https://www.google.com/search?q=gay+pride';
urlListClone5[149] = 'https://www.google.com/search?q=vote+bernie+sanders';
urlListClone5[150] = 'https://www.google.com/search?q=vote+for+change';
urlListClone5[151] = 'https://www.google.com/search?q=bisexual+woman';
urlListClone5[152] = 'https://www.google.com/search?q=bartender+female';
urlListClone5[153] = 'https://www.google.com/search?q=bartending+career+tips';
urlListClone5[154] = 'https://www.google.com/search?q=bartender+tricks';
urlListClone5[155] = 'https://www.google.com/search?q=bartender+school';
urlListClone5[156] = 'https://www.google.com/search?q=bartender+app';
urlListClone5[157] = 'https://search.yahoo.com/search?q=hipster+clubs';
urlListClone5[158] = 'https://search.yahoo.com/search?q=bisexual+lifestyle';
urlListClone5[159] = 'https://search.yahoo.com/search?q=vintage+style';
urlListClone5[160] = 'https://search.yahoo.com/search?q=vintage+dress';
urlListClone5[161] = 'https://search.yahoo.com/search?q=vintage+jewelry';
urlListClone5[162] = 'https://search.yahoo.com/search?q=vintage+clothes';
urlListClone5[163] = 'https://search.yahoo.com/search?q=bartending';
urlListClone5[164] = 'https://search.yahoo.com/search?q=female+bartender';
urlListClone5[165] = 'https://search.yahoo.com/search?q=hipster+woman';
urlListClone5[166] = 'https://search.yahoo.com/search?q=liberal+politics';
urlListClone5[167] = 'https://search.yahoo.com/search?q=liberal+progressive';
urlListClone5[168] = 'https://search.yahoo.com/search?q=liberal+rally';
urlListClone5[169] = 'https://search.yahoo.com/search?q=hipster+life';
urlListClone5[170] = 'https://search.yahoo.com/search?q=alcholic+drinks';
urlListClone5[171] = 'https://search.yahoo.com/search?q=cocktails';
urlListClone5[172] = 'https://search.yahoo.com/search?q=recent+college+grad';
urlListClone5[173] = 'https://search.yahoo.com/search?q=twentysomething+female';
urlListClone5[174] = 'https://search.yahoo.com/search?q=popular+nightclubs';
urlListClone5[175] = 'https://search.yahoo.com/search?q=dj+festivals';
urlListClone5[176] = 'https://search.yahoo.com/search?q=glitter+makeup';
urlListClone5[177] = 'https://search.yahoo.com/search?q=techno+music';
urlListClone5[178] = 'https://search.yahoo.com/search?q=art+fair';
urlListClone5[179] = 'https://search.yahoo.com/search?q=feminist+march';
urlListClone5[180] = 'https://search.yahoo.com/search?q=cocktail+lounge';
urlListClone5[181] = 'https://search.yahoo.com/search?q=women+liberation';
urlListClone5[182] = 'https://search.yahoo.com/search?q=female+power';
urlListClone5[183] = 'https://search.yahoo.com/search?q=woman+march';
urlListClone5[184] = 'https://search.yahoo.com/search?q=liberal+movement';
urlListClone5[185] = 'https://search.yahoo.com/search?q=support+elizabeth+warren';
urlListClone5[186] = 'https://search.yahoo.com/search?q=college+dating+app';
urlListClone5[187] = 'https://search.yahoo.com/search?q=hipster+app';
urlListClone5[188] = 'https://search.yahoo.com/search?q=liberal+meetup';
urlListClone5[189] = 'https://search.yahoo.com/search?q=lgbt+meetup';
urlListClone5[190] = 'https://search.yahoo.com/search?q=womens+lib';
urlListClone5[191] = 'https://search.yahoo.com/search?q=gay+pride';
urlListClone5[192] = 'https://search.yahoo.com/search?q=vote+bernie+sanders';
urlListClone5[193] = 'https://search.yahoo.com/search?q=vote+for+change';
urlListClone5[194] = 'https://search.yahoo.com/search?q=bisexual+woman';
urlListClone5[195] = 'https://search.yahoo.com/search?q=bartender+female';
urlListClone5[196] = 'https://search.yahoo.com/search?q=bartending+career+tips';
urlListClone5[197] = 'https://search.yahoo.com/search?q=bartender+tricks';
urlListClone5[198] = 'https://search.yahoo.com/search?q=bartender+school';
urlListClone5[199] = 'https://search.yahoo.com/search?q=bartender+app';

urlListClone6[0] = 'https://www.dogfoodadvisor.com/';
urlListClone6[1] = 'https://www.petsmart.com/dog/food/';
urlListClone6[2] = 'http://petfoodtalk.com/dogfoodreviews/';
urlListClone6[3] = 'https://www.pedigree.com/dog-foods';
urlListClone6[4] = 'http://www.dogfoodscoop.com/10-best-dog-food.html';
urlListClone6[5] = 'https://www.petfood.com/';
urlListClone6[6] = 'https://pets.webmd.com/dogs/guide/best-dog-food-choices';
urlListClone6[7] = 'https://www.consumersearch.com/dog-food';
urlListClone6[8] = 'https://www.chewy.com/s?page=1&query=dog+food&rh=c%3A288';
urlListClone6[9] = 'https://www.petflow.com/';
urlListClone6[10] = 'https://www.dogfoodadvisor.com/dog-food-reviews/brand/';
urlListClone6[11] = 'http://www.iams.com/dog-food';
urlListClone6[12] = 'https://www.purina.com/';
urlListClone6[13] = 'https://www.royalcanin.com/';
urlListClone6[14] = 'http://www.drsfostersmith.com/dog-supplies/food/ps/c/3307/28497';
urlListClone6[15] = 'https://www.reviews.com/dog-food/';
urlListClone6[16] = 'http://www.dog-obedience-training-review.com/';
urlListClone6[17] = 'https://www.cesarsway.com/dog-training/obedience/5-essential-commands-you-can-teach-your-dog';
urlListClone6[18] = 'http://thedogtrainingsecret.com/';
urlListClone6[19] = 'http://www.barkbusters.com/';
urlListClone6[20] = 'http://www.akc.org/content/dog-training/basics/';
urlListClone6[21] = 'https://www.petco.com/shop/en/petcostore/petco-dog-training';
urlListClone6[22] = 'https://www.lovethatpet.com/dogs/training-and-behaviour/dog-training-tips/';
urlListClone6[23] = 'http://www.quickanddirtytips.com/dog-trainer';
urlListClone6[24] = 'https://www.dogbreedinfo.com/training.htm';
urlListClone6[25] = 'http://www.thedogtrainingclub.com/';
urlListClone6[26] = 'https://apdt.com/';
urlListClone6[27] = 'https://theonlinedogtrainer.com/';
urlListClone6[28] = 'http://www.akc.org/content/dog-training/behavior-issues/';
urlListClone6[29] = 'http://www.akc.org/content/dog-breeding/articles/18-tips-for-first-time-breeders/';
urlListClone6[30] = 'http://www.akc.org/dog-breeds/';
urlListClone6[31] = 'http://www.akc.org/dog-breeders/responsible-breeding/';
urlListClone6[32] = 'http://www.akc.org/dog-breeders/';
urlListClone6[33] = 'https://breedingbusiness.com/breeding/';
urlListClone6[34] = 'https://www.wikihow.pet/Breed-Dogs';
urlListClone6[35] = 'http://www.petwave.com/Dogs/Basics/Breeding/Mating.aspx';
urlListClone6[36] = 'https://www.nature.com/scitable/topicpage/genetics-of-dog-breeding-434';
urlListClone6[37] = 'https://www.rover.com/dog-walking/';
urlListClone6[38] = 'https://www.care.com/dog-walkers';
urlListClone6[39] = 'http://www.thedogwalker.org/';
urlListClone6[40] = 'https://thepetstaff.com/';
urlListClone6[41] = 'https://www.taskrabbit.com/t/dog-walking';
urlListClone6[42] = 'https://uk.dogbuddy.com/dog-walking';
urlListClone6[43] = 'https://www.rufusanddelilah.com/';
urlListClone6[44] = 'https://www.dogwalker.com/';
urlListClone6[45] = 'https://www.chewy.com/b/treats-335';
urlListClone6[46] = 'https://www.petsmart.com/dog/treats/';
urlListClone6[47] = 'https://www.petco.com/shop/en/petcostore/category/dog/dog-treats-and-chews';
urlListClone6[48] = 'http://www.drsfostersmith.com/dog-supplies/dog-treats/ps/c/3307/19';
urlListClone6[49] = 'https://www.walmart.com/browse/pets/dog-treats-chews/5440_202072_202087';
urlListClone6[50] = 'https://www.pinterest.com/bigbark1/homemade-dog-treats/';
urlListClone6[51] = 'https://www.zukes.com/';
urlListClone6[52] = 'https://www.thedogbakery.com/';
urlListClone6[53] = 'https://www.daisysdelights.com/';
urlListClone6[54] = 'https://pets.webmd.com/dogs/guide/healthy-dog-treats#1';
urlListClone6[55] = 'http://www.petcenterinc.com/';
urlListClone6[56] = 'https://www.lifesabundance.com/Pets/Treats/DogTreats.aspx?realname=&cat=0&hdr=&Ath=False';
urlListClone6[57] = 'http://www.redbarninc.com/dog-treat';
urlListClone6[58] = 'http://www.animalplanet.com/breed-selector/dog-breeds.html';
urlListClone6[59] = 'https://iheartdogs.com/the-10-best-dog-breeds-for-children/';
urlListClone6[60] = 'https://topdogtips.com/best-dog-muzzles/';
urlListClone6[61] = 'http://www.businessinsider.com/best-dog-breeds-2014-8';
urlListClone6[62] = 'https://www.dog.com/';
urlListClone6[63] = 'http://www.womansday.com/life/pet-care/g30/10-best-dog-food-brands-77104/';
urlListClone6[64] = 'https://www.bestdogcrateguide.com/';
urlListClone6[65] = 'https://www.consumeraffairs.com/pets/pet-food/';
urlListClone6[66] = 'https://search.yahoo.com/search?q=dog+food';
urlListClone6[67] = 'https://search.yahoo.com/search?q=dog+breeders';
urlListClone6[68] = 'https://search.yahoo.com/search?q=doggie+treats';
urlListClone6[69] = 'https://search.yahoo.com/search?q=dog+health';
urlListClone6[70] = 'https://search.yahoo.com/search?q=dog+vets';
urlListClone6[71] = 'https://search.yahoo.com/search?q=animal+health';
urlListClone6[72] = 'https://search.yahoo.com/search?q=dog+contest';
urlListClone6[73] = 'https://search.yahoo.com/search?q=dog+race';
urlListClone6[74] = 'https://search.yahoo.com/search?q=dog+tricks';
urlListClone6[75] = 'https://search.yahoo.com/search?q=best+dog';
urlListClone6[76] = 'https://search.yahoo.com/search?q=dog+walkers';
urlListClone6[77] = 'https://search.yahoo.com/search?q=dog+daycare';
urlListClone6[78] = 'https://search.yahoo.com/search?q=dog+boarding';
urlListClone6[79] = 'https://search.yahoo.com/search?q=dog+haircut';
urlListClone6[80] = 'https://search.yahoo.com/search?q=dog+style';
urlListClone6[81] = 'https://search.yahoo.com/search?q=snoop+dog';
urlListClone6[82] = 'https://search.yahoo.com/search?q=dog+trainers';
urlListClone6[83] = 'https://search.yahoo.com/search?q=dog+shows';
urlListClone6[84] = 'https://search.yahoo.com/search?q=doggie+daycare';
urlListClone6[85] = 'https://search.yahoo.com/search?q=dog+best+friend';
urlListClone6[86] = 'https://search.yahoo.com/search?q=dog+veterinarian';
urlListClone6[87] = 'https://search.yahoo.com/search?q=veterinarian';
urlListClone6[88] = 'https://search.yahoo.com/search?q=veterinarian+facts';
urlListClone6[89] = 'https://search.yahoo.com/search?q=veterinarian+review';
urlListClone6[90] = 'https://search.yahoo.com/search?q=veterinarian+care';
urlListClone6[91] = 'https://search.yahoo.com/search?q=veterinarian+hospital';
urlListClone6[92] = 'https://search.yahoo.com/search?q=veterinarian+free';
urlListClone6[93] = 'https://search.yahoo.com/search?q=dog+help';
urlListClone6[94] = 'https://search.yahoo.com/search?q=dog+walk';
urlListClone6[95] = 'https://search.yahoo.com/search?q=dog+bredding';
urlListClone6[96] = 'https://search.yahoo.com/search?q=dog+clothes';
urlListClone6[97] = 'https://search.yahoo.com/search?q=dog+technology';
urlListClone6[98] = 'https://search.yahoo.com/search?q=pets';
urlListClone6[99] = 'https://search.yahoo.com/search?q=pets+dogs';
urlListClone6[100] = 'https://search.yahoo.com/search?q=pets+dog+gear';
urlListClone6[101] = 'https://search.yahoo.com/search?q=pets+gear';
urlListClone6[102] = 'https://search.yahoo.com/search?q=dog+stroller';
urlListClone6[103] = 'https://search.yahoo.com/search?q=doggie+stroller';
urlListClone6[104] = 'https://search.yahoo.com/search?q=pets+stuff';
urlListClone6[105] = 'https://search.yahoo.com/search?q=pet+stuff';
urlListClone6[106] = 'https://search.yahoo.com/search?q=i+am+dog';
urlListClone6[107] = 'https://search.yahoo.com/search?q=dog+lover';
urlListClone6[108] = 'https://search.yahoo.com/search?q=find+a+dog';
urlListClone6[109] = 'https://search.yahoo.com/search?q=adopt+a+dog';
urlListClone6[110] = 'https://search.yahoo.com/search?q=dog+adoption';
urlListClone6[111] = 'https://search.yahoo.com/search?q=pet+rescue';
urlListClone6[112] = 'https://search.yahoo.com/search?q=animal+rescue';
urlListClone6[113] = 'https://search.yahoo.com/search?q=animal+society';
urlListClone6[114] = 'https://search.yahoo.com/search?q=find+pet';
urlListClone6[115] = 'https://search.yahoo.com/search?q=puppies';
urlListClone6[116] = 'https://search.yahoo.com/search?q=puppies+love';
urlListClone6[117] = 'https://search.yahoo.com/search?q=adopt+puppy';
urlListClone6[118] = 'https://search.yahoo.com/search?q=puppy+supply';
urlListClone6[119] = 'https://search.yahoo.com/search?q=dog+supplies';
urlListClone6[120] = 'https://search.yahoo.com/search?q=small+dogs';
urlListClone6[121] = 'https://search.yahoo.com/search?q=free+puppies';
urlListClone6[122] = 'https://www.bing.com/search?q=dog+food';
urlListClone6[123] = 'https://www.bing.com/search?q=dog+breeders';
urlListClone6[124] = 'https://www.bing.com/search?q=doggie+treats';
urlListClone6[125] = 'https://www.bing.com/search?q=dog+health';
urlListClone6[126] = 'https://www.bing.com/search?q=dog+vets';
urlListClone6[127] = 'https://www.bing.com/search?q=animal+health';
urlListClone6[128] = 'https://www.bing.com/search?q=dog+contest';
urlListClone6[129] = 'https://www.bing.com/search?q=dog+race';
urlListClone6[130] = 'https://www.bing.com/search?q=dog+tricks';
urlListClone6[131] = 'https://www.bing.com/search?q=best+dog';
urlListClone6[132] = 'https://www.bing.com/search?q=dog+walkers';
urlListClone6[133] = 'https://www.bing.com/search?q=dog+daycare';
urlListClone6[134] = 'https://www.bing.com/search?q=dog+boarding';
urlListClone6[135] = 'https://www.bing.com/search?q=dog+haircut';
urlListClone6[136] = 'https://www.bing.com/search?q=dog+style';
urlListClone6[137] = 'https://www.bing.com/search?q=snoop+dog';
urlListClone6[138] = 'https://www.bing.com/search?q=dog+trainers';
urlListClone6[139] = 'https://www.bing.com/search?q=dog+shows';
urlListClone6[140] = 'https://www.bing.com/search?q=doggie+daycare';
urlListClone6[141] = 'https://www.bing.com/search?q=dog+best+friend';
urlListClone6[142] = 'https://www.bing.com/search?q=dog+veterinarian';
urlListClone6[143] = 'https://www.bing.com/search?q=veterinarian';
urlListClone6[144] = 'https://www.bing.com/search?q=veterinarian+facts';
urlListClone6[145] = 'https://www.bing.com/search?q=veterinarian+review';
urlListClone6[146] = 'https://www.bing.com/search?q=veterinarian+care';
urlListClone6[147] = 'https://www.bing.com/search?q=veterinarian+hospital';
urlListClone6[148] = 'https://www.bing.com/search?q=veterinarian+free';
urlListClone6[149] = 'https://www.bing.com/search?q=dog+help';
urlListClone6[150] = 'https://www.bing.com/search?q=dog+walk';
urlListClone6[151] = 'https://www.bing.com/search?q=dog+bredding';
urlListClone6[152] = 'https://www.bing.com/search?q=dog+clothes';
urlListClone6[153] = 'https://www.bing.com/search?q=dog+technology';
urlListClone6[154] = 'https://www.bing.com/search?q=pets';
urlListClone6[155] = 'https://www.bing.com/search?q=pets+dogs';
urlListClone6[156] = 'https://www.bing.com/search?q=pets+dog+gear';
urlListClone6[157] = 'https://www.bing.com/search?q=pets+gear';
urlListClone6[158] = 'https://www.bing.com/search?q=dog+stroller';
urlListClone6[159] = 'https://www.bing.com/search?q=doggie+stroller';
urlListClone6[160] = 'https://www.bing.com/search?q=pets+stuff';
urlListClone6[161] = 'https://www.bing.com/search?q=pet+stuff';
urlListClone6[162] = 'https://www.bing.com/search?q=i+am+dog';
urlListClone6[163] = 'https://www.bing.com/search?q=dog+lover';
urlListClone6[164] = 'https://www.bing.com/search?q=find+a+dog';
urlListClone6[165] = 'https://www.bing.com/search?q=adopt+a+dog';
urlListClone6[166] = 'https://www.bing.com/search?q=dog+adoption';
urlListClone6[167] = 'https://www.bing.com/search?q=pet+rescue';
urlListClone6[168] = 'https://www.bing.com/search?q=animal+rescue';
urlListClone6[169] = 'https://www.bing.com/search?q=animal+society';
urlListClone6[170] = 'https://www.bing.com/search?q=find+pet';
urlListClone6[171] = 'https://www.bing.com/search?q=puppies';
urlListClone6[172] = 'https://www.bing.com/search?q=puppies+love';
urlListClone6[173] = 'https://www.bing.com/search?q=adopt+puppy';
urlListClone6[174] = 'https://www.bing.com/search?q=puppy+supply';
urlListClone6[175] = 'https://www.bing.com/search?q=dog+supplies';
urlListClone6[176] = 'https://www.bing.com/search?q=small+dogs';
urlListClone6[177] = 'https://www.bing.com/search?q=free+puppies';
urlListClone6[178] = 'https://www.google.com/search?q=dog+food';
urlListClone6[179] = 'https://www.google.com/search?q=dog+breeders';
urlListClone6[180] = 'https://www.google.com/search?q=doggie+treats';
urlListClone6[181] = 'https://www.google.com/search?q=dog+health';
urlListClone6[182] = 'https://www.google.com/search?q=dog+vets';
urlListClone6[183] = 'https://www.google.com/search?q=animal+health';
urlListClone6[184] = 'https://www.google.com/search?q=dog+contest';
urlListClone6[185] = 'https://www.google.com/search?q=dog+race';
urlListClone6[186] = 'https://www.google.com/search?q=dog+tricks';
urlListClone6[187] = 'https://www.google.com/search?q=best+dog';
urlListClone6[188] = 'https://www.google.com/search?q=dog+walkers';
urlListClone6[189] = 'https://www.google.com/search?q=dog+daycare';
urlListClone6[190] = 'https://www.google.com/search?q=dog+boarding';
urlListClone6[191] = 'https://www.google.com/search?q=dog+haircut';
urlListClone6[192] = 'https://www.google.com/search?q=dog+style';
urlListClone6[193] = 'https://www.google.com/search?q=snoop+dog';
urlListClone6[194] = 'https://www.google.com/search?q=dog+trainers';
urlListClone6[195] = 'https://www.google.com/search?q=dog+shows';
urlListClone6[196] = 'https://www.google.com/search?q=doggie+daycare';
urlListClone6[197] = 'https://www.google.com/search?q=dog+best+friend';
urlListClone6[198] = 'https://www.google.com/search?q=dog+veterinarian';
urlListClone6[199] = 'https://www.google.com/search?q=veterinarian';
urlListClone6[200] = 'https://www.google.com/search?q=veterinarian+facts';
urlListClone6[201] = 'https://www.google.com/search?q=veterinarian+review';
urlListClone6[202] = 'https://www.google.com/search?q=veterinarian+care';
urlListClone6[203] = 'https://www.google.com/search?q=veterinarian+hospital';
urlListClone6[204] = 'https://www.google.com/search?q=veterinarian+free';
urlListClone6[205] = 'https://www.google.com/search?q=dog+help';
urlListClone6[206] = 'https://www.google.com/search?q=dog+walk';
urlListClone6[207] = 'https://www.google.com/search?q=dog+bredding';
urlListClone6[208] = 'https://www.google.com/search?q=dog+clothes';
urlListClone6[209] = 'https://www.google.com/search?q=dog+technology';
urlListClone6[210] = 'https://www.google.com/search?q=pets';
urlListClone6[211] = 'https://www.google.com/search?q=pets+dogs';
urlListClone6[212] = 'https://www.google.com/search?q=pets+dog+gear';
urlListClone6[213] = 'https://www.google.com/search?q=pets+gear';
urlListClone6[214] = 'https://www.google.com/search?q=dog+stroller';
urlListClone6[215] = 'https://www.google.com/search?q=doggie+stroller';
urlListClone6[216] = 'https://www.google.com/search?q=pets+stuff';
urlListClone6[217] = 'https://www.google.com/search?q=pet+stuff';
urlListClone6[218] = 'https://www.google.com/search?q=i+am+dog';
urlListClone6[219] = 'https://www.google.com/search?q=dog+lover';
urlListClone6[220] = 'https://www.google.com/search?q=find+a+dog';
urlListClone6[221] = 'https://www.google.com/search?q=adopt+a+dog';
urlListClone6[222] = 'https://www.google.com/search?q=dog+adoption';
urlListClone6[223] = 'https://www.google.com/search?q=pet+rescue';
urlListClone6[224] = 'https://www.google.com/search?q=animal+rescue';
urlListClone6[225] = 'https://www.google.com/search?q=animal+society';
urlListClone6[226] = 'https://www.google.com/search?q=find+pet';
urlListClone6[227] = 'https://www.google.com/search?q=puppies';
urlListClone6[228] = 'https://www.google.com/search?q=puppies+love';
urlListClone6[229] = 'https://www.google.com/search?q=adopt+puppy';
urlListClone6[230] = 'https://www.google.com/search?q=puppy+supply';
urlListClone6[231] = 'https://www.google.com/search?q=dog+supplies';
urlListClone6[232] = 'https://www.google.com/search?q=small+dogs';
urlListClone6[233] = 'https://www.google.com/search?q=free+puppies';

// set-up the default chosen clones lists
let urlList = urlListClone1;
let urlListMax = urlListClone1.length;
let imgNotify = "imgClone1.png";

// initialize the tab id of the clone
let tabID = -1;
let tabIDChange = -1;

// initialize the base urls
let startUrl = "https://clonepatrol.com/start.html";
let changeUrl = "https://clonepatrol.com/change.html";

// initialize the existingFlag (used to make tab active or background)
let existingFlag = true;

// analytics count
let cloneLinks = 0;

// bandwdith meter
let currentBandwidth = 0;

// pause flag, closed flag, start flag
let pauseFlag = false;
let closedFlag = false;
let startFlag = false;

// see if clone has already been set
checkCloneStorage();

// set listener for from content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

	// set the pause flag default for any received message
	pauseFlag = false;

	// check if message is pause
	if ( request.message === "pause" ) {  
	
		// change the icon to inactive
		chrome.browserAction.setIcon({path:"img/iconPause38.png"});		

		// set the pause flag to on
		pauseFlag = true;
	
	// check if message is resume
	} else if ( request.message === "resume" ) {  
	
		// change the icon to active
		chrome.browserAction.setIcon({path:"img/icon.png"});		
		
	// check if message is open window to change clone
	} else if ( request.message === "openChange" ) {  

		// open the change clone tab		
		chrome.tabs.create({"url":changeUrl, "selected":existingFlag}, function(tab) {	
			
			// set the tab id for the change clone window
			tabIDChange = tab.id;	
		
		}); 
				
	// check if message is change clone
	} else if ( request.message === "changeClone" ) {  	

		// get the tab id of changeUrl
		chrome.tabs.query( { "url":changeUrl}, function(results){ 
			
			if (results) {
				// set the tab id for the change clone window
				tabIDChange = results[0].id;	

				// close the change clone tab
				chrome.tabs.remove(tabIDChange);		
			}
			
		});
		
		// get new clone, validate
		cloneID = parseInt(request.clone);

		// validate new clone
		if ((cloneID < 1) || (isNaN(cloneID))) {

			// default to clone 1 if validation error
			cloneID = 1;

		}

		// store new clone in storage
		storage.set({'cloneID': JSON.stringify(cloneID)}, function() {
			
			// update the urlist, urlListMax - clone should already be running
			setUrlList(cloneID);		
			
			// reset the cloneLink
			cloneLinks = 0;

		});

	// check if message is new clone from start url
	} else if ( request.message === "newClone" ) {  

		// get new clone, validate
		cloneID = parseInt(request.clone);

		// validate new clone
		if ((cloneID < 1) || (isNaN(cloneID))) {

			// default to clone 1 if validation error
			cloneID = 1;

		}

		// update the urlist, urlListMax
		setUrlList(cloneID);			
		
		// store new clone in storage
		storage.set({'cloneID': JSON.stringify(cloneID)}, function() {					
			
			// start the clone update loop
			if (tabID > 0) {

				// only run if start has not occurred already
				if (!startFlag) {
				
					runCloneLoop();
					
					// set the start flag to prevent duplicate launches
					startFlag = true;
				}

			} else {

				// tabID not yet set - run as existing clone to setup a background tab
				runExistingClone(false);				

			}			

		});
			
	} 

});


// check storage for existing clone
function checkCloneStorage() {

	storage.get('cloneID', function(items) {
	
		// if set, run clone in background tab
		if (items.cloneID) {

			// get current clone
			let cloneIDJson = items.cloneID;
			
			// parse the clone from JSON
			cloneIDJson = JSON.parse(items.cloneID);
			
			// convert id to int
			cloneID = parseInt(cloneIDJson);
									
			// validate new clone
			if ((cloneID < 1) || (isNaN(cloneID))) {
			
				// default to clone 1 if validation error
				cloneID = 1;

			}

			// update the urlist, urlListMax
			setUrlList(cloneID);			

			// get the cloneLinks from storage - analytics count
			getCloneLinksStorage();
						
			// set up the tab flag to run in background
			existingFlag = false;
		
			// launch the clone
			runExistingClone(existingFlag);

		} else {

			// clone not set yet, show start url
			runChooseClone(existingFlag);						
			
		}
	});
			
}

// check storage for clone links count
function getCloneLinksStorage() {

	storage.get('cloneLinks', function(items) {
	
		// if set, get count (otherwise is 0 as default)
		if (items.cloneLinks) {
		
			// get current clone links
			let cloneLinksJson = items.cloneLinks;
			
			// parse the clone links from JSON
			cloneLinksJson = JSON.parse(items.cloneLinks);
			
			// convert clone links to int
			cloneLinks = parseInt(cloneLinksJson);
									
			// validate clone links
			if ((cloneLinks < 1) || (isNaN(cloneLinks))) {
			
				// default to clone links 0 if validation error
				cloneLinks = 0;

			}			

		} 

	});
			
}
	
// run the start page to choose the clone
function runChooseClone(existingFlag) {

	// open the start url - wait for listener to receive clone
	chrome.tabs.create({"url":startUrl, "selected":existingFlag}, function(tab) {	
		
		// set the tab id 
		tabID = tab.id;
	
	}); 
		
}

// run a clone in a background tab
function runExistingClone(existingFlag) {

	// calculate a random number to pull from urlList array (between 0 and max-1 )
	let randPull = Math.floor((Math.random() * urlListMax));
	
	chrome.tabs.create({"url":urlList[randPull], "selected":existingFlag}, function(tab) {	

		// set the tab id
		tabID = tab.id;

		// start the clone update loop
		runCloneLoop();
				
	}); 	

}

// put the clone update on a loop
function runCloneLoop(){

	// create a random page timer - between 1 second and 12 minutes	
	let randPageTimer = Math.floor((Math.random() * 1000 * 60 * 12) + 1);	

	// meter the bandwidth
	let bandwidthFlag = true;

	// cap at every 20MBs
	if (currentBandwidth > 20000) {

		// skip this loop run, reset current
		bandwidthFlag = false;
		currentBandwidth = 0;
	
	}

	// update the page if bandwidth is less than y
	if (bandwidthFlag) {

		// check that not paused
		if (!pauseFlag) {
			runCloneUpdate();
		}

	}

	// call loop after timer expires
	let loopTimer = setInterval(function() {		

		// clear timer
		clearInterval(loopTimer);

		// check the tab has not been closed
		if (!closedFlag) {

			// run loop again
			 runCloneLoop();
		}

	}, randPageTimer);

}

function runCloneUpdate() {

	// check tab id is valid
	if (tabID > 0) {
		
		// calculate a random number to pull from urlList array (between 0 and max-1 )
		let randPull = Math.floor((Math.random() * urlListMax));

		// pull url
		let newURL = urlList[randPull];

	
		// go to next page on the list
		chrome.tabs.update(tabID,{url: newURL}, function(tab) {	

			//check that tab still exists
			if (chrome.runtime.lastError) {
				console.log(chrome.runtime.lastError.message);
		
				// tab has been closed by user, stop the loop
				closedFlag = true;

				// send notification
				sendCloseNotification();		
			
			} else {
				
				// scroll page to mimic user and get page bandwidth for metering
				setTimeout(function(){ 
													
					chrome.tabs.executeScript( tabID, {									
						file: 'js/bandwidthScroll.js'
					},
						function(results){ 				
							// check if online
							if (chrome.runtime.lastError) {
								console.log(chrome.runtime.lastError.message);
								console.log("offline");

							} else {
				
								// update the current bandwidth
								currentBandwidth = currentBandwidth + results;				

								// handle the cloneLinks
								handleCloneLinks();
			
							}
						} 
					);
				},
				2000);
			}
			
		}); 
			
	} 
					
}

// function to count cloneLinks and display notices
function handleCloneLinks() {
	
	// increment the clone links count
	cloneLinks = cloneLinks + 1;
	
	// store the new count		
	storage.set({'cloneLinks': JSON.stringify(cloneLinks)}, function() {
		// save occurred
	});
		
	// send a notification to the user - only send sporadically
	if ((cloneLinks % 17 === 0) || (cloneLinks === 1)) {
		sendNotification(cloneID);
	}

}

// function to set clone parameters, when chosen
function setUrlList(cloneID) {

	switch (cloneID) {
		case 1:
			urlList = urlListClone1;			
			urlListMax = urlListClone1.length;
			imgNotify = "imgClone1.png";
			cloneName = "Grandpa George";
			break;
		case 2:
			urlList = urlListClone2;
			urlListMax = urlListClone2.length;	
			imgNotify = "imgClone2.png";
			cloneName = "Soccer Mom Sally";
			break;
		case 3:
			urlList = urlListClone3;
			urlListMax = urlListClone3.length;
			imgNotify = "imgClone3.png";
			cloneName = "Couch Potato Bob";
			break;
		case 4:
			urlList = urlListClone4;
			urlListMax = urlListClone4.length;
			imgNotify = "imgClone4.png";
			cloneName = "Video Game Ed";
			break;
		case 5:
			urlList = urlListClone5;
			urlListMax = urlListClone5.length;
			imgNotify = "imgClone5.png";
			cloneName = "Hipster Irene";
			break;
		case 6:
			urlList = urlListClone6;
			urlListMax = urlListClone6.length;
			imgNotify = "imgClone6.png";
			cloneName = "Fido the Dog";
			break;
		default:
			urlList = urlListClone1;
			urlListMax = urlListClone1.length;
			imgNotify = "imgClone1.png";
			cloneName = "Grandpa George";
	}

}

// function to display notification to user
function sendNotification(cloneID) {

	var displayTitle = "";
	var displayText = "";

	// set the start-up notification
	if (cloneLinks === 1) {

		displayTitle = "It's so awesome being your clone";
		displayText = "I'm pumped to get started! " + cloneName + " is hard at work and on patrol...";
		
	} else if (cloneLinks % 2 === 0) { 

		// set ongoingoing notifications
		displayTitle = "Your clone is still out on patrol!";
		displayText = "I'm doing some great cloning here. I've already visited " + cloneLinks + " sites.";

	} else {

		// set ongoingoing notifications
		displayTitle = "Clones on patrol, baby!";
		displayText = "I'm pretty sure I'm the best clone ever. I've patroled over " + cloneLinks + " sites.";	
	
	}

	var opt = {
		type: "basic",
		title: displayTitle,
		isClickable: false,
		eventTime: 30000,
		message: displayText,
		iconUrl: "../img/" + imgNotify
	}
				
	chrome.notifications.create("id1", opt, creationCallback);			
				
	function creationCallback() {
		// hide the notification after 4 seconds
		setTimeout(function(){
			chrome.notifications.clear("id1", clearCallback);	
		}, 30000);
	}
	
	function clearCallback() {
		// do nothing				
	}

}			

// function to display notification to user about tab being closed
function sendCloseNotification() {

	let displayTitle = "Clone Patrol's Tab Has Been Closed";
	let displayText = "Your clone has been stopped. You can start your clone again by relaunching the browser.";		
	
	var opt = {
		type: "basic",
		title: displayTitle,
		isClickable: false,
		eventTime: 30000,
		message: displayText,
		iconUrl: "../img/icon_128.png"
	}
				
	chrome.notifications.create("id2", opt, creationCloseCallback);			
				
	function creationCloseCallback() {
		// hide the notification after 4 seconds
		setTimeout(function(){
			chrome.notifications.clear("id2", clearCloseCallback);	
		}, 30000);
	}
	
	function clearCloseCallback() {
		// do nothing				
	}

}			
	