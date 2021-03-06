/**
 * Created by mingzhang on 5/9/17.
 */
'use strict';

let aaMW = {
  A: 89.1,
  R: 174.2,
  N: 132.1,
  D: 133.1,
  C: 121.2,
  Q: 146.2,
  E: 147.1,
  G: 75.1,
  H: 155.2,
  I: 131.2,
  L: 131.2,
  K: 146.2,
  M: 149.2,
  F: 145.2,
  P: 115.1,
  S: 105.1,
  T: 119.1,
  W: 204.2,
  Y: 181.2,
  V: 117.1
};

let aaPI = {
  H: 7.6,
  D: 2.85,
  R: 10.76,
  F: 5.49,
  A: 6.01,
  C: 5.05,
  G: 6.06,
  Q: 5.65,
  E: 3.15,
  K: 9.6,
  L: 6.01,
  M: 5.74,
  N: 5.41,
  S: 5.68,
  Y: 5.64,
  T: 5.6,
  I: 6.05,
  W: 5.89,
  P: 6.3,
  V: 6
};

// function color(n) {
//   if (n === 7) {
//     return 'rgba(0,255,0,1)';
//   }
//   if (n < 7) {
//     let r = Math.round(255 * (1 - n / 7));
//     let g = Math.round(255 * (7 - n) / 7);
//     return `rgba(${r},${g},0,1)`;
//   } else {
//     let b = Math.round(255 * (n - 7) / 7);
//     let g = Math.round(255 * (n - 7)/ 7);
//     return `rgba(0,${g},${b},1)`;
//   }
// }

// function color(n) {
//   switch (Math.floor(n / 2)) {
//     case 1:
//       return 'red';
//     case 2:
//       return '#f66';
//     case 3:
//       return 'orange';
//     default:
//       return 'blue';
//
//   }
// }

function color(aa) {
  let colorObj = {
    H: 'magenta',
    D: 'red',
    R: 'blue',
    F: 'green',
    A: 'orange',
    C: 'green',
    G: 'orange',
    Q: 'magenta',
    E: 'red',
    K: 'green',
    L: 'green',
    M: 'green',
    N: 'magenta',
    S: 'orange',
    Y: 'green',
    T: 'orange',
    I: 'green',
    W: 'green',
    P: 'green',
    V: 'green'
  };
  return colorObj[aa];
}

function draw(seq) {
//   let axis = `<g id="axis" stroke="grey" stroke-width="2"><line x1="50" y1="20" x2="1050" y2="20"></line><line x1="50" y1="20"
// x2="50" y2="14"></line><line x1="300" y1="20" x2="300" y2="14"></line><line x1="550" y1="20" x2="550" y2="14"></line><line x1="800" y1="20" x2="800" y2="14"></line><line x1="1050" y1="20" x2="1050" y2="14"></line></g>`;
  let bars = '<g stroke-width="2" stroke-linecap="butt"' +
    ' transform="translate(0 20)">';
  for (let i = 0; i < seq.length; i++) {
    let len = Math.round(aaMW[seq[i]] / 8);
    let col = color(seq[i]);
    let x = i % 200;
    let y = Math.floor(i / 200) + 1;
    bars += `<line x1="${x*4+30}" y1="${100 * y - 50 - len}" x2="${x*4+30}" y2="${100 * y - 50 + len}" stroke="${col}" ></line>`;
    if (x === 199) {
      bars += `<text x="840" y="${100 * y - 50}" alignment-baseline="middle">${200 * y}</text>`
    }
  }

  return bars + '</g>';
}

let mlh1 = `MSFVAGVIRRLDETVVNRIAAGEVIQRPANAIKEMIENCLDAKSTSIQVIVKEGGLKLIQ
IQDNGTGIRKEDLDIVCERFTTSKLQSFEDLASISTYGFRGEALASISHVAHVTITTKTA
DGKCAYRASYSDGKLKAPPKPCAGNQGTQITVEDLFYNIATRRKALKNPSEEYGKILEVV
GRYSVHNAGISFSVKKQGETVADVRTLPNASTVDNIRSIFGNAVSRELIEIGCEDKTLAF
KMNGYISNANYSVKKCIFLLFINHRLVESTSLRKAIETVYAAYLPKNTHPFLYLSLEISP
QNVDVNVHPTKHEVHFLHEESILERVQQHIESKLLGSNSSRMYFTQTLLPGLAGPSGEMV
KSTTSLTSSSTSGSSDKVYAHQMVRTDSREQKLDAFLQPLSKPLSSQPQAIVTEDKTDIS
SGRARQQDEEMLELPAPAEVAAKNQSLEGDTTKGTSEMSEKRGPTSSNPRKRHREDSDVE
MVEDDSRKEMTAACTPRRRIINLTSVLSLQEEINEQGHEVLREMLHNHSFVGCVNPQWAL
AQHQTKLYLLNTTKLSEELFYQILIYDFANFGVLRLSEPAPLFDLAMLALDSPESGWTEE
DGPKEGLAEYIVEFLKKKAEMLADYFSLEIDEEGNLIGLPLLIDNYVPPLEGLPIFILRL
ATEVNWDEEKECFESLSKECAMFYSIRKQYISEESTLSGQQSEVPGSIPNSWKWTVEHIV
YKALRSHILPPKHFTEDGNILQLANLPDLYKVFERC`;

let p53 = `MEEPQSDPSVEPPLSQETFSDLWKLLPENNVLSPLPSQAMDDLMLSPDDIEQWFTEDPGP
DEAPRMPEAAPPVAPAPAAPTPAAPAPAPSWPLSSSVPSQKTYQGSYGFRLGFLHSGTAK
SVTCTYSPALNKMFCQLAKTCPVQLWVDSTPPPGTRVRAMAIYKQSQHMTEVVRRCPHHE
RCSDSDGLAPPQHLIRVEGNLRVEYLDDRNTFRHSVVVPYEPPEVGSDCTTIHYNYMCNS
SCMGGMNRRPILTIITLEDSSGNLLGRNSFEVRVCACPGRDRRTEEENLRKKGEPHHELP
PGSTKRALPNNTSSSPQPKKKPLDGEYFTLQIRGRERFEMFRELNEALELKDAQAGKEPG
GSRAHSSHLKSKKGQSTSRHKKLMFKTEGPDSD`;


let tpr = `MAAVLQQVLERTELNKLPKSVQNKLEKFLADQQSEIDGLKGRHEKFKVESEQQYFEIEKR
LSHSQERLVNETRECQSLRLELEKLNNQLKALTEKNKELEIAQDRNIAIQSQFTRTKEEL
EAEKRDLIRTNERLSQELEYLTEDVKRLNEKLKESNTTKGELQLKLDELQASDVSVKYRE
KRLEQEKELLHSQNTWLNTELKTKTDELLALGREKGNEILELKCNLENKKEEVSRLEEQM
NGLKTSNEHLQKHVEDLLTKLKEAKEQQASMEEKFHNELNAHIKLSNLYKSAADDSEAKS
NELTRAVEELHKLLKEAGEANKAIQDHLLEVEQSKDQMEKEMLEKIGRLEKELENANDLL
SATKRKGAILSEEELAAMSPTAAAVAKIVKPGMKLTELYNAYVETQDQLLLEKLENKRIN
KYLDEIVKEVEAKAPILKRQREEYERAQKAVASLSVKLEQAMKEIQRLQEDTDKANKQSS
VLERDNRRMEIQVKDLSQQIRVLLMELEEARGNHVIRDEEVSSADISSSSEVISQHLVSY
RNIEELQQQNQRLLVALRELGETREREEQETTSSKITELQLKLESALTELEQLRKSRQHQ
MQLVDSIVRQRDMYRILLSQTTGVAIPLHASSLDDVSLASTPKRPSTSQTVSTPAPVPVI
ESTEAIEAKAALKQLQEIFENYKKEKAENEKIQNEQLEKLQEQVTDLRSQNTKISTQLDF
ASKRYEMLQDNVEGYRREITSLHERNQKLTATTQKQEQIINTMTQDLRGANEKLAVAEVR
AENLKKEKEMLKLSEVRLSQQRESLLAEQRGQNLLLTNLQTIQGILERSETETKQRLSSQ
IEKLEHEISHLKKKLENEVEQRHTLTRNLDVQLLDTKRQLDTETNLHLNTKELLKNAQKE
IATLKQHLSNMEVQVASQSSQRTGKGQPSNKEDVDDLVSQLRQTEEQVNDLKERLKTSTS
NVEQYQAMVTSLEESLNKEKQVTEEVRKNIEVRLKESAEFQTQLEKKLMEVEKEKQELQD
DKRRAIESMEQQLSELKKTLSSVQNEVQEALQRASTALSNEQQARRDCQEQAKIAVEAQN
KYERELMLHAADVEALQAAKEQVSKMASVRQHLEETTQKAESQLLECKASWEERERMLKD
EVSKCVCRCEDLEKQNRLLHDQIEKLSDKVVASVKEGVQGPLNVSLSEEGKSQEQILEIL
RFIRREKEIAETRFEVAQVESLRYRQRVELLERELQELQDSLNAEREKVQVTAKTMAQHE
ELMKKTETMNVVMETNKMLREEKERLEQDLQQMQAKVRKLELDILPLQEANAELSEKSGM
LQAEKKLLEEDVKRWKARNQHLVSQQKDPDTEEYRKLLSEKEVHTKRIQQLTEEIGRLKA
EIARSNASLTNNQNLIQSLKEDLNKVRTEKETIQKDLDAKIIDIQEKVKTITQVKKIGRR
YKTQYEELKAQQDKVMETSAQSSGDHQEQHVSVQEMQELKETLNQAETKSKSLESQVENL
QKTLSEKETEARNLQEQTVQLQSELSRLRQDLQDRTTQEEQLRQQITEKEEKTRKAIVAA
KSKIAHLAGVKDQLTKENEELKQRNGALDQQKDELDVRITALKSQYEGRISRLERELREH
QERHLEQRDEPQEPSNKVPEQQRQITLKTTPASGERGIASTSDPPTANIKPTPVVSTPSK
VTAAAMAGNKSTPRASIRPMVTPATVTNPTTTPTATVMPTTQVESQEAMQSEGPVEHVPV
FGSTSGSVRSTSPNVQPSISQPILTVQQQTQATAFVQPTQQSHPQIEPANQELSSNIVEV
VQSSPVERPSTSTAVFGTVSATPSSSLPKRTREEEEDSTIEASDQVSDDTVEMPLPKKLK
SVTPVGTEEEVMAEESTDGEVETQVYNQDSQDSIGEGVTQGDYTPMEDSEETSQSLQIDL
GPLQSDQQTTTSSQDGQGKGDDVIVIDSDDEEEDDDENDGEHEDYEEDEEDDDDDEDDTG
MGDEGEDSNEGTGSADGNDGYEADDAEGGDGTDPGTETEESMGGGEGNHRAADSQNSGEG
NTGAAESSFSQEVSREQQPSSASERQAPRAPQSPRRPPHPLPPRLTIHAPPQELGPPVQR
IQMTRRQSVGRGLQLTPGIGGMQQHFFDDEDRTVPSTPTLVVPHRTDGFAEAIHSPQVAG
VPRFRFGPPEDMPQTSSSHSDLGQLASQGGLGMYETPLFLAHEEESGGRSVPTTPLQVAA
PVTVFTESTTSDASEHASQSVPMVTTSTGTLSTTNETATGDDGDEVFVEAESEGISSEAG
LEIDSQQEEEPVQASDESDLPSTSQDPPSSSSVDTSSSQPKPFRRVRLQTTLRQGVRGRQ
FNRQRGVSHAMGGRGGINRGNIN`;

let h3 = `MARTKQTARKSTGGKAPRKQLATKAARKSAPSTGGVKKPHRYRPGTVALREIRRYQKSTE
LLIRKLPFQRLVREIAQDFKTDLRFQSAAIGALQEASEAYLVGLFEDTNLCAIHAKRVTI
MPKDIQLARRIRGERA`;

let msh6 = `MSRQSTLYSFFPKSPALSDANKASARASREGGRAAAAPGASPSPGGDAAWSEAGPGPRPL
ARSASPPKAKNLNGGLRRSVAPAAPTSCDFSPGDLVWAKMEGYPWWPCLVYNHPFDGTFI
REKGKSVRVHVQFFDDSPTRGWVSKRLLKPYTGSKSKEAQKGGHFYSAKPEILRAMQRAD
EALNKDKIKRLELAVCDEPSEPEEEEEMEVGTTYVTDKSEEDNEIESEEEVQPKTQGSRR
SSRQIKKRRVISDSESDIGGSDVEFKPDTKEEGSSDEISSGVGDSESEGLNSPVKVARKR
KRMVTGNGSLKRKSSRKETPSATKQATSISSETKNTLRAFSAPQNSESQAHVSGGGDDSS
RPTVWYHETLEWLKEEKRRDEHRRRPDHPDFDASTLYVPEDFLNSCTPGMRKWWQIKSQN
FDLVICYKVGKFYELYHMDALIGVSELGLVFMKGNWAHSGFPEIAFGRYSDSLVQKGYKV
ARVEQTETPEMMEARCRKMAHISKYDRVVRREICRIITKGTQTYSVLEGDPSENYSKYLL
SLKEKEEDSSGHTRAYGVCFVDTSLGKFFIGQFSDDRHCSRFRTLVAHYPPVQVLFEKGN
LSKETKTILKSSLSCSLQEGLIPGSQFWDASKTLRTLLEEEYFREKLSDGIGVMLPQVLK
GMTSESDSIGLTPGEKSELALSALGGCVFYLKKCLIDQELLSMANFEEYIPLDSDTVSTT
RSGAIFTKAYQRMVLDAVTLNNLEIFLNGTNGSTEGTLLERVDTCHTPFGKRLLKQWLCA
PLCNHYAINDRLDAIEDLMVVPDKISEVVELLKKLPDLERLLSKIHNVGSPLKSQNHPDS
RAIMYEETTYSKKKIIDFLSALEGFKVMCKIIGIMEEVADGFKSKILKQVISLQTKNPEG
RFPDLTVELNRWDTAFDHEKARKTGLITPKAGFDSDYDQALADIRENEQSLLEYLEKQRN
RIGCRTIVYWGIGRNRYQLEIPENFTTRNLPEEYELKSTKKGCKRYWTKTIEKKLANLIN
AEERRDVSLKDCMRRLFYNFDKNYKDWQSAVECIAVLDVLLCLANYSRGGDGPMCRPVIL
LPEDTPPFLELKGSRHPCITKTFFGDDFIPNDILIGCEEEEQENGKAYCVLVTGPNMGGK
STLMRQAGLLAVMAQMGCYVPAEVCRLTPIDRVFTRLGASDRIMSGESTFFVELSETASI
LMHATAHSLVLVDELGRGTATFDGTAIANAVVKELAETIKCRTLFSTHYHSLVEDYSQNV
AVRLGHMACMVENECEDPSQETITFLYKFIKGACPKSYGFNAARLANLPEEVIQKGHRKA
REFEKMNQSLRLFREVCLASERSTVDAEAVHKLLTLIKEL`;

function example(seq) {
  seq = seq.replace(/\s+/g, '');
  let h = Math.ceil(seq.length / 200);
  let svg = document.getElementById('chart');
  svg.setAttribute('height', h * 100 + 50 + '');
  let template;
  try {
    template = draw(seq);
  } catch(err) {
    alert(err);
  }
  svg.innerHTML = template;
}

// run(p53);
// run(tpr);
// run(h3);
// run(msh6);

function chroma() {
  let seq = document.getElementById('inputbox').value;
  seq = seq.replace(/\s+/g, '');
  if (seq.length === 0) {
    alert('Please input your sequence!');
    return;
  }
  let h = Math.ceil(seq.length / 200);
  let svg = document.getElementById('chart');
  svg.setAttribute('height', h * 100 + 50 + '');
  let template;
  try {
    template = draw(seq);
  } catch(err) {
    alert(err);
  }
  svg.innerHTML = template;
}