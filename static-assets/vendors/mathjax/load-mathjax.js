window.MathJax = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["[[", "]]"],
      ["\\(", "\\)"],
    ],
    macros: {
      aggrresult: "{\\texttt{Aggr.Res}}",
      nrads: "{n_A}",
      policyvector: "{\\texttt{P}}",
      encryptedvector: "{\\texttt{EncVec}}",
      pk: "{\\texttt{pk}}",
      sk: "{\\texttt{sk}}",
      ctxt: "{C}",
      message: "{M}",
      signature: "{S}",
      enc: "{\\texttt{Enc}}",
      dec: "{\\texttt{Dec}}",
      sign: "{\\texttt{Sign}}",
      signverify: "{\\texttt{Sign.Verify}}",
      VRF: "{\\texttt{VRF}}",
      VRFpk: "{\\VRF_{\\pk}}",
      VRFsk: "{\\VRF_{\\sk}}",
      adclicks: "{\\texttt{AdClicks}}",
      ad: "{\\texttt{ad}}",
      nrinteractions: "{\\texttt{n}}",
      signreward: "{\\texttt{Sign.Reward}}",
      decryptedaggr: "{\\texttt{Dec.}\\aggrresult}",
      proofresult: "{\\Pi_{\\texttt{Res}}}",
      verify: "{\\texttt{Verify}}",
      encadspayout: "{\\texttt{Enc.Ads.Payout}}",
      nrusers: "{\\texttt{n}}",
      encpolicy: "{\\texttt{Enc}\\mathcal{P}}",
      seckey: "{\\mathcal{S}}",
      encseckey: "{\\enc\\seckey}",
      valikey: "{\\pk_{\\mathcal{V}}}",
      encvecpublic: "{\\texttt{EncVec'}}",
      encryptedaggregatedresult: "{\\texttt{Aggr.Res}}",
      adclicks: "{\\texttt{ac}}",
      payreq: "{\\mathcal{E}}",
      addr: "{\\texttt{Addr}}",
      aggrproofdec: "{\\Pi_{r}}",
      FSC: "{\\textsc{FSC}\\xspace}",
      vrfmax: "{\\texttt{Max.Draw}}",
      nrcp: "{n}",
      dpoolsize: "{L}",
      vrfrandom: "{\\VRF.\\texttt{RandGen}}",
      vrfrandgen: "{\\VRF.\\exttt{Rand}}",
      vrfproof: "{\\Pi^{\\VRF}}",
      vrfseed: "{\\epsilon}",
      vrfverif: "{\\VRF.\\texttt{Verif}}",
      code: ["{\\textsf{#1}}", 1],
      distpk: "{\\pk_{\\code{T}}}",
    },
  },
};

(function () {
  var script = document.createElement("script");
  script.src = "/static-assets/vendors/mathjax/es5/tex-chtml.js";
  script.async = true;
  document.head.appendChild(script);
})();
