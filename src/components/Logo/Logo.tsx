import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import azimutLogo from '../../images/logo.png';

export default function Logo(props: any) {
  const useStyles = makeStyles((theme: Theme) => ({
    azLogo: {
      width: '100%',
      height: 'auto',
    },
  }));

  return (
    <div {...props}>
      <img src={azimutLogo} className={useStyles().azLogo} alt="Azimut" />
    </div>
  );

  /*
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="121" height="30" {...props}>
      <path
        d="M48.35456275 26.31256103c-.2636013-.32159308-.66152464-.51418751-1.0658661-.51418751-.90541314 0-1.42573917.83523938-1.42573917 1.67011644 0 .816068.53912195 1.63213142 1.41886261 1.63213142.4047999 0 .80914136-.21230244 1.07274266-.51418293v1.12421864c-.35345496.1669754-.70645147.28934066-1.09841513.28934066-1.36109955 0-2.36961517-1.17563693-2.36961517-2.51215754 0-1.3746845.97000691-2.58885224 2.38886952-2.58885224.37912743 0 .7513783.10250728 1.07916078.28252565v1.1310474M51.26747164 26.31883071h-.01283624l-.53316226 1.76023112h1.14976007l-.60376157-1.76023112zm-.81555948 2.53097118l-.39838178 1.0217393h-.9952668l1.88830214-4.97255322h.7316655l1.83695719 4.97255326h-1.00856147l-.37225087-1.02173934h-1.6824639M55.2334104 27.27589553h.19254355c.55883474 0 .86048631-.12183002.86048631-.75157327 0-.62293237-.35987307-.71304704-.88615878-.71304704h-.16687108v1.4646203zm0 2.59564565h-.94392185v-4.8440866h1.28408213c1.01452115 0 1.67604578.40453913 1.67604578 1.50314195 0 1.0280081-.55883474 1.52911504-1.54768341 1.52911504h-.46852265v1.81182966M59.10995394 29.87154123h-.94392185v-4.84408665h.94392185v4.84408665M61.85736706 29.87154123h-.94438028v-4.02174896h-.97601244v-.82233769h2.89640516v.82233769h-.97601244v4.02174896M65.4703093 26.31883071h-.01283623l-.53270383 1.76023112h1.14930164l-.60376157-1.76023112zm-.81555947 2.53097118l-.39792334 1.0217393h-.9952668l1.8878437-4.97255322h.73212393l1.83649875 4.97255326h-1.00810303l-.3727093-1.02173934h-1.68246391M69.4367065 29.04920262h1.33542707v.8223386h-2.27934892v-4.84408664h.94392185v4.02174804M77.51803449 26.86472439h-.01283624l-1.09795669 3.07077633h-.32778248L75.0200111 26.8647244h-.01283623l-.43001394 3.0068168h-.95033996l.81510104-4.97255322h.66794275l1.1946869 3.19297097 1.14288353-3.19297097h.68077899l.72570582 4.97255326h-.95033997l-.38554554-3.00681684M81.56053223 26.31883071h-.01283624l-.53270383 1.76023112h1.14930164l-.60376157-1.76023112zm-.81510104 2.53097118l-.39838178 1.0217393h-.9952668l1.8878437-4.97255322h.73212394l1.83649874 4.97255326h-1.0076446l-.3727093-1.02173934h-1.6824639M84.58254914 24.89898797h.680779l2.54890988 3.38556999h.01283624v-3.25710338h.94438029v4.94029466h-.680779l-2.54936833-3.38555509H85.526471v3.28934708h-.94392185v-4.97255326M91.74608619 26.31883071h-.01283624l-.53270383 1.76023112h1.14930164l-.60376157-1.76023112zm-.81555948 2.53097118l-.39792334 1.0217393h-.9952668l1.8878437-4.97255322h.73212394l1.83649874 4.97255326H92.9852415l-.37179244-1.02173934h-1.68292234M99.04440373 27.2952412v.12218775c0 1.36841023-.69957491 2.5825688-2.2023315 2.5825688-1.41290293 0-2.30547983-1.19498718-2.30547983-2.5315078 0-1.3807753.91824937-2.56950198 2.3632429-2.56950198.8219776 0 1.5412653.41745917 1.91351616 1.15647885l-.83481383.44968864c-.19254355-.43679107-.60376157-.77091893-1.1043748-.77091893-.91183126 0-1.361558.931266-1.361558 1.73425343 0 .80316584.45614485 1.69609366 1.36797611 1.69609366.5904669 0 1.08557889-.51365043 1.10483325-1.09860282h-1.02781583v-.77074006h2.08680537M100.94279147 25.84979227v1.06652974h1.5027566v.82233769h-1.5027566v1.31054292h1.56051966v.8223386h-2.5044415v-4.84408664h2.5044415v.82233769h-1.56051966M107.23346442 26.86472439h-.01283624l-1.09749825 3.07077633h-.32778248l-1.05990642-3.07077633h-.0123778l-.43047237 3.0068168h-.95033996l.81510104-4.97255322h.66794275l1.1946869 3.19297097 1.14288352-3.19297097h.680779l.72570582 4.97255326h-.95033997l-.38554554-3.00681684M110.41593429 25.84979227v1.06652974h1.50275659v.82233769h-1.5027566v1.31054292h1.56051966v.8223386h-2.5044415v-4.84408664h2.5044415v.82233769h-1.56051965M113.09183124 24.89898797h.68032055l2.54936833 3.38556999h.01283624v-3.25710338h.94438029v4.94029466h-.68123743l-2.5489099-3.38555509h-.01329467v3.28934708h-.94346341v-4.97255326M120.02431603 29.87154123h-.94438029v-4.02174896h-.97601244v-.82233769h2.89640517v.82233769h-.97601244v4.02174896"
        fill="#3368AB"
      />
      <path
        transform="matrix(.04584 0 0 -.04586 0 29.99999775)"
        d="M979.031 193.367H2639.37"
        stroke="#4A463D"
        strokeWidth=".5"
        fill="none"
      />
      <path
        d="M117.80502236 5.51387576h3.19347236V3.97920194h-8.0629905v1.53467382h3.19301391v11.92138995h1.67650423V5.51387576zM99.16405579 3.97920194v8.51305738c0 2.961887 1.83787406 5.22823805 4.92315528 5.22823805 3.08665653 0 4.92407215-2.26635105 4.92407215-5.22823805V3.97920194h-1.6774211v7.94172263c0 2.19544445-.65923244 4.22921635-3.24665105 4.22921635-2.58650173 0-3.24573418-2.0337719-3.24573418-4.22921635V3.97920194zM87.6769991 17.72049737l4.03057838-9.17272725h.03575809l1.57014683 8.887491h1.73014136l-2.7469547-14.02702701-4.61966996 10.6006284-4.62058684-10.6006284-2.74649625 14.0270316h1.73014135l1.56922996-8.8874956h.0357581zM75.9928145 3.97920194h-1.67650423V17.4352657h1.67650423zm-12.71841856 11.9215734l6.8137496-11.9215734h-8.57964905v1.53467382h5.85103183l-6.81466647 11.92138995h9.54328368v-1.53449037zm-9.61479986-3.37320032h-4.78012292l2.38983224-5.44370972zm.69590741 1.53504074l1.53347187 3.37264995h1.80211597L51.2693054 3.40823411l-6.42146503 14.0270316h1.80179507l1.5339303-3.37264995h6.17193775"
        fill="#104076"
      />
      <path
        transform="matrix(.04584 0 0 -.04586 0 29.99999775)"
        d="M866.922 2.80078V579.789"
        stroke="#4A463D"
        strokeWidth=".5"
        fill="none"
      />
      <path
        d="M16.70769176 29.87154123c-4.45990466 0-8.7677916-1.25679518-12.45783882-3.6360189l-.0587345-.03762269 1.0595901-1.68499948.05964266.03710442c3.4377276 2.16387083 7.39802759 3.3076186 11.45359078 3.3076186 5.06412467 0 9.94932136-1.82956915 13.7555865-5.1502729.09118313-.07884117.17640657-.16515826.25897108-.24991595.05551672-.0559089.1117211-.11287267.17030936-.16786427l-5.00251073-5.44733303c-.0215007.01972176-.04263465.04068186-.06413534.06090813-.05817108.05554197-.1162092.11021252-.1780111.16286503-2.51118053 2.14558968-5.71161655 3.32696885-9.01112997 3.32696885-1.91970507 0-3.85893956-.40613062-5.61388236-1.17527918l-.29262036 1.29549018-1.20536848-.47171694.01792489-.06214647c.16045296-.56528062.0291566-1.16991303-.35295067-1.61745934-.33236685-.39003217-.80336506-.61362187-1.29205893-.61362187-.40383718 0-.78667795.14511545-1.10831737.4197524-.1780111.1531876-.32145605.33449019-.42529203.54055963l-.04029662.07916222-1.56368287-1.3247059 6.2341935-7.58017236-3.69885334-2.86190228L8.4558252 5.3743145l4.24934911 2.49695803 1.05903539-1.28746389c.01737476-.84276117.38609567-1.63195254 1.01465868-2.16852195.52990736-.4523621 1.20500174-.7024615 1.90145927-.7024615.85846919 0 1.67077376.37512618 2.22804982 1.02745772.52880711.61880456.7673319 1.40941773.67403997 2.23034738l2.31941173 2.4008672c1.2198551-.5752791 3.45959505-1.63319089 3.505072-1.6555728.0637686-.0394435.13647671-.22519495.16723784-.34398414l.0075642-.03045407.46251713-.24097236 1.52288197 3.26729906-.49712911.24794378-.0334659-.02077664c-.06592325-.0419202-.26162544-.14924326-.37339697-.14924326-.0152201 0-.02489313.0023391-.03007347.00431127l-2.6442648 1.31700065 8.4932795 9.00720208c.68426312-.74227193 1.17942096-1.35534342 1.69942608-2.10188076l.03979234-.05788106 1.63244842 1.13854167-.04029661.05788107c-1.21737954 1.74766881-2.57008969 3.26193291-4.02099705 4.50082624-4.19556986 3.58547523-9.55304839 5.559803-15.08473298 5.559803m-12.32263612-3.7171808c3.65423367 2.3398123 7.91325122 3.57654127 12.32263612 3.57654127 5.49858544 0 10.82287312-1.9626823 14.99304558-5.52611961 1.42528073-1.21738285 2.75635265-2.70261469 3.95672417-4.41735275l-1.4011211-.9767774c-.52147212.74493208-1.02483598 1.36213138-1.72234793 2.11495216l-.05102404.05522092-8.72662395-9.25514585 2.82172577-1.40533579c.03117372-.01109922.05657113-.01596086.08504007-.01596086.1412903 0 .33470488.10374562.41406033.15016055l.30403544-.1513989-1.40212966-3.00912749-.27652922.14364778c-.02704779.09461858-.1033317.32499623-.22706386.4009938-.024343.01375936-2.73022174 1.29044507-3.55880083 1.68176144l-.04529358.02183153-2.4366845-2.52218353.00394255-.03384804c.09847227-.79263121-.12804146-1.55778956-.63718163-2.15421222-.5307784-.62114364-1.30402414-.97783228-2.1211423-.97783228-.6629458 0-1.30585788.23771598-1.81013862.66879692-.60366988.51505894-.95556615 1.27558497-.96519332 2.08715824l-.00036675.02508791-1.16722653 1.4187741-4.2382045-2.4904957-.9566664 1.42629588L11.25160342 9.860088l-.04602708.05622994-6.19247573 7.52880865 1.32373693 1.12097555c.10759517-.18992511.24764769-.3600826.4168568-.50469813.3479537-.29738577.7625183-.45415081 1.20037152-.45415081.52990736 0 1.03973518.2418438 1.3996541.66269693.39829009.46690116.54457735 1.09304404.39737322 1.68607272l.93388207.36636606.29477501-1.3024616.07862195.03439842c1.7574642.78378394 3.70582159 1.19853251 5.63464956 1.19853251 3.26563034 0 6.4337053-1.1702295 8.91930503-3.2941757.06033031-.05068032.11621379-.1048005.17278492-.15818684.03887546-.0367375.07825062-.07347501.11855181-.10966214l.05138621-.0471029 5.19253288 5.65422803-.05249104.04802018c-.07504614.06756308-.14541623.13956584-.21633644.2108898-.08398566.08654183-.1717305.17464764-.26662697.25670391-3.83225394 3.34437445-8.75059563 5.18522628-13.8481862 5.1857629-4.05877225 0-8.0230148-1.13819311-11.4688109-3.29201548l11.41256068 5.16422123zm12.33588495-7.6199507c-2.89690944 0-5.70034358-1.04020807-7.89387308-2.92923144l-.05194092-.04536004.04387242-.05320288 5.81211053-7.02732103.05446232.0586149c.52825699.56486784 1.2664323.88862572 2.0256957.88862572.64772569 0 1.28041464-.23505584 1.78093619-.66306385.01072742-.00917291.02007954-.01990522.02920244-.02994955.01182767-.01394283.02342613-.02719768.03740846-.03994803l.05336207-.04834124 1.52558675 1.75464023-1.29458033.61311735.9901323 2.66656514 2.3322984-1.16184087 2.63509605 2.8688737-.05262857.04691943c-.03277825.03013301-.06427287.05966978-.09581334.09012385-.04850264.0456811-.09686774.0917291-.14844191.13562148-2.16987416 1.8543039-4.93411192 2.87515714-7.78288548 2.87515714M8.97193361 15.5428025c2.15983438 1.83907687 4.90903542 2.85006922 7.74900698 2.85006922 2.81512428 0 5.5465838-1.00865326 7.69119807-2.84057526.04941952-.04265403.09613425-.08686746.14326158-.13167713.0152201-.01398869.03062359-.02866534.04529357-.04297509l-2.4673081-2.68615389-2.37795872 1.18390172-1.0891547-2.93427654 1.2424102-.58926779-1.3047118-1.50059187c-.0060972.00678795-.01274454.01325485-.01989616.01949243-.52665246.44914699-1.19156953.69714122-1.87280696.69714122-.77196212 0-1.52251523-.31820828-2.07314394-.87592125L8.9719336 15.5428025"
        fill="#B7B5AB"
      />
      <path
        d="M1.59503996.00100229L1.7375818 1.7355997l-1.73740271.07792388 1.44479152.96962253L.4228009 4.1902706l1.65753593-.52496568.46291596 1.67713372.62318555-1.62480226 1.59933552.684212-.88105638-1.50064233L5.4165252 2.0769283l-1.72252717-.24670543.31159506-1.7122201-1.26607472 1.19353327L1.5950395.00100688M16.65309191 7.61162871l3.73497818 10.30411406c-2.5040289.76772677-5.1865732.69246303-7.63297657-.20010704L16.65309191 7.6116287zm-.05588347-3.8190955L6.96718847 27.57867037l1.70139735.7291776 3.42163647-8.86921857c2.8605554 1.05126143 6.00337046 1.13583567 8.92856547.21730625l3.22212467 8.84146135 2.62473538-1.07584942L16.62838215 3.82459253"
        fill="#33649D"
      />
      <path
        d="M24.19901129 28.59091483l-.02503066-.06933344-3.1990653-8.77749405c-2.87417096.886837-6.00891754.81065598-8.84315864-.21464611l-3.42360775 8.87246119-1.83356475-.78524702.02631429-.06485707 9.63043255-23.78632521.1197896.04889161.04190115-.0182541 10.26683484 23.66342198-2.76084533 1.13138222zm-3.13667201-9.0233143l.02273847.06448557 3.19649805 8.77125188 2.49022995-1.02030744L16.60793586 3.95558169 7.05887588 27.54068994l1.56978008.67220466 3.42035284-8.86512287.06573988.02417062c2.8440975 1.04539077 5.99832764 1.12189284 8.88258423.21661829zm-4.1877306-1.05740728c-1.40790596 0-2.81562856-.24326559-4.14349142-.72791633l-.06821543-.0250879 3.99284901-10.3481899L20.480491 17.96146973l-.072158.02183153c-1.14554245.3516894-2.34036688.526892-3.53372432.526892m-4.02709425-.8366612c2.38511034.85367694 5.02327792.92302415 7.44836397.19620857L16.65112063 7.81407485l-3.8036062 9.85945722"
        fill="#33649D"
      />
    </svg>
  );
  */
}
