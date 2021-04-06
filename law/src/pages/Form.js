import React, {useState} from "react";
import {
  Typography,
  Grid,
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Button,
  Divider,
  TextField
} from "@material-ui/core";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const firstChoice = ["A Party shall not subcontract or otherwise delegate or assign this Agreement or any of its obligations under this Agreement without the other Party's prior written consent.", "{P2.The} shall not assign or transfer any rights or obligations under this Agreement without {P1.the}'s prior written consent.", "{P1.The} shall not assign or transfer any rights or obligations under this Agreement without {P2.the}'s prior written consent."]

const Form = () => {
  // const [effectiveDate, setEffectiveDate] = useState("Effective Date");
  // const [party1, setParty1] = useState("Party 1");
  // const [party2, setParty2] = useState("Party 2"); 
  // const [accessPerson, setAccessPerson] = useState("Access Person");
  // const [confidentEnd, setConfidentEnd] = useState("Confidentiality End Date");
  // const [durationConfident, setDurationConfident] = useState("Duration of Confidentiality");
  // const [endDate, setEndDate] = useState("Termination Date");
  // const [noticePeriod, setNoticePeriod] = useState("Notice Period");
  // const [why, setWhy] = useState("Why");

  const [state, setState] = useState({
    effectiveDate: "",
    party1: "",
    party2: "",
    accessPerson: "",
    confidentEnd: "",
    durationConfident: "",
    endDate: "",
    noticePeriod: "",
    state: "",
    why: ""
  })

  const [value, setValue] = useState("0");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChang = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }
  
  const classes = useStyles();

  return (
  <Grid container className={classes.container}>
    <TextField required label="Effective Date" name="effectiveDate" variant="outlined" value={state.effectiveDate} onChange={handleChang}/>
    <TextField required label="Party 1" name="party1" variant="outlined" value={state.party1} onChange={handleChang}/>
    <TextField required label="Party 2" name="party2" variant="outlined" value={state.party2} onChange={handleChang}/>
    <TextField required label="Accessible Person" name="accessPerson" variant="outlined" value={state.accessPerson} onChange={handleChang}/>
    <TextField required label="Confidentiality End Date" name="confidentEnd" variant="outlined" value={state.confidentEnd} onChange={handleChang}/>
    <TextField required label="Duration of Confidentiality" name="durationConfident" variant="outlined" value={state.durationConfident} onChange={handleChang}/>
    <TextField required label="Termination Date" name="endDate" variant="outlined" value={state.endDate} onChange={handleChang}/>
    <TextField required label="Notice Period" name="noticePeriod" variant="outlined" value={state.noticePeriod} onChange={handleChang}/>
    <TextField required label="State" name="state" variant="outlined" value={state.state} onChange={handleChang}/>
    <TextField required label="Why" name="why" variant="outlined" value={state.why} onChange={handleChang}/>

      <Divider />
      <Grid  container className={classes.grid}>
        <Grid item xs={12}>
          <Typography> 
            <Box fontSize={19} fontWeight="fontWeightBold" m={1}>
              Mutual Non-Disclosure Agreement
            </Box>
          </Typography>
        </Grid>
      </Grid>
      <Typography>
        <Box fontSize={19} textAlign="left" fontWeight="fontWeightBold" m={1}>
          By and Between:
        </Box>
        <Box textAlign="left" m={1}>
          Each a "Party" and collectively the "Parties."
        </Box>
        <Box textAlign="left" m={1}>
          This Mutual Non-Disclosure Agreement (this "Agreement") is made as of {state.effectiveDate}, by and between the Parties.
        </Box>
        <Box fontSize={19} textAlign="left" fontWeight="fontWeightBold" m={1}>
          Recitals
        </Box>
        <Box textAlign="left" m={1}>
        In consideration of the mutual promises contained in this Agreement and other good and valuable consideration, the receipt and sufficiency of which is hereby acknowledged, the Parties agree as follows:
        </Box>
      </Typography>
      <p>
        <ol>
          <li>Confidentiality</li>
          <ol>
            <li>Definition</li>
            <Typography> As used herein, the "Confidential Information" shall mean any and all technical and non-technical information disclosed by a Party (the "Disclosing Party") to the other Party (the "Receiving Party") including without limitation infromation regarding:</Typography>
            <ol>
              <li>patent and patent applications;</li>
              <li>trade secrets;</li>
              <li>proprietary and confidential information, ideas, techniques, sketches, drawings, works of authorship, models, inventions, know-how, processes, apparatuses, equipment, algorithms, software programs, software source documents, and formulae related to the current, future, and proposed products and services of the Disclosing Party, including without limitation the Disclosing Party's information concerning research, experimental work, development, design details and specifications, engineering, financial information, procurement requirements, purchasing, manufacturing, customer lists, investors, employees, business and contractual relationships, business forecasts, sales and merchandising, and marketing plans;</li>
              <li>information the Disclosing Party provides regarding third parties; and</li>
              <li>all other information that the Receiving Party knew, or reasonably should have known, was the Confidential Information of the Disclosing Party.</li>
            </ol>
            <li>Engagement</li>
            <ol>
              <li>Disclosure and Use</li>
              <Typography>Subject to Sections 1.3 and 1.4, the Receiving Party agrees that at all times and notwithstanding any termination or expiration of this Agreement that:</Typography>
              <ol>
                <li>the Receiving Party will hold in strict confidence and not disclose to any third party any Confidential Information of the Disclosing Party, except as approved in writing by the Disclosing Party; and</li>
                <li>the Receiving Party will use the Confidential Information of the Disclosing Party for no purpose other than the Permitted Use.</li>
              </ol>
              <li>Care</li>
              <Typography>The Receiving Party will protect Confidential Information with a degree of care that is at least the same as the Receiving Party uses to protect its own confidential information, and in any event at least a reasonable degree of care.</Typography>
              <li>Access</li>
              <Typography>Select one:</Typography>

            </ol>
            <li>Exclusions from Confidentiality</li>
            <Typography>The Receiving Party will not have any obligations under this Agreement with respect to a specific portion of the Confidential Information if the Receiving Party can demonstrate with competent evidence that such portion of Confidential Information:</Typography>
            <ol>
              <li>was in the public domain at the time it was disclosed to the Receiving Party;</li>
              <li>entered the public domain subsequent to the time it was disclosed to the Receiving Party, through no fault of the Receiving Party;</li>
              <li>was in the Receiving Party's possession free of any obligation of confidence at the time it was disclosed to the Receiving Party;</li>
              <li>was rightfully communicated to the Receiving Party free of any obligation of confidence subsequent to the time it was disclosed to the Receiving Party; or</li>
              <li>was developed by employees or agents of the Receiving Party who had no access to any Confidential Information.</li>
            </ol>
            <li>Exception for Compelled Disclosure</li>
            <Typography>Notwithstanding any other provisions of this Agreement, the Receiving Party may disclose Confidential Information, without violating the obligations of this Agreement, to the extent such disclosure is required by a valid order of a court or other governmental body having jurisdiction, and provided that, to the extent permitted by law the Receiving Party gives the Disclosing Party reasonable prior written notice of such disclosure and makes a reasonable effort to obtain, or to assist the Disclosing Party in obtaining, a protective order preventing or limiting the disclosure and/or requiring that the Confidential Information so disclosed be used only for the purposes required by the law, regulation, or order.</Typography>
            <li>Copying</li>
            <Typography>The Receiving Party will not reproduce the Confidential Information of the Disclosing Party in any form except as required to accomplish the intent of this Agreement. Any reproduction by a Receiving Party of any Confidential Information of the Disclosing Party will remain the property of the Disclosing Party and will contain any and all confidential or proprietary notices or legends that appear on the original, unless otherwise authorized in writing by the Disclosing Party.</Typography>
            <li>Covenant Not to Decompile</li>
            <Typography>Each Party agrees that the software programs of the other Party contain valuable confidential information and each Party agrees that it will not modify, reverse engineer, decompile, create other works from, or disassemble any software programs contained in the Confidential Information of the Disclosing Party without the prior written consent of the other Party.</Typography>
            <li>Term of Confidentiality</li>
            <Typography>Select one:</Typography>

          </ol>
          <li>Limits</li>
          <ol>
            <li>Property of Disclosing Party</li>
            <Typography>Confidential Information is and shall remain the sole property of the Disclosing Party.</Typography>
            <li>No License</li>
            <Typography>The Receiving Party recognizes and agrees that nothing contained in this Agreement will be construed as granting any property rights, by license or otherwise, to any Confidential Information of the Disclosing Party, or to any invention or any patent, copyright, trademark, or other intellectual property right that has issued or that may issue, based on such Confidential Information.</Typography>
            <li>No Other Use</li>
            <Typography>The Receiving Party shall not make, have made, use, or sell for any purpose any service, product, or item using, incorporating, or derived from any Confidential Information of the Disclosing Party.</Typography>
            <li>No Agreement to Deal</li>
            <Typography>Neither this Agreement nor the disclosure of any Confidential Information hereunder shall result in any obligation on the part of either Party to enter into any further agreement with the other, license any products or services to the other, or to require either Party to disclose any particular Confidential Information.</Typography>
            <li>No Agency</li>
            <Typography>Nothing in this Agreement creates or shall be deemed to create any employment, joint venture, or agency between the Parties.</Typography>
            <li>No Warranty Regarding Information</li>
            <Typography>THE DISCLOSING PARTY IS PROVIDING CONFIDENTIAL INFORMATION ON AN "AS IS" BASIS FOR USE BY THE RECEIVING PARTY AT ITS OWN RISK. THE DISCLOSING PARTY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT OF THIRD PARTY RIGHTS, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE.</Typography>
          </ol>
          <li>Representation Against Violation of Third-Party Intellectual Property Rights</li>
          <Typography>The Disclosing Party represents that its communication of Confidential Information to the Receiving Party does not violate any law or proprietary rights of, or agreement with, any third party.</Typography>
          <li>Termination</li>
          <ol>
            <li>Term</li>
            <Typography>This Agreement will terminate on {state.endDate}.</Typography>
            <li>Termination</li>
            <Typography>This Agreement may be terminated by either Party at any time upon {state.noticePeriod} written notice to the other Party.</Typography>
            <li>Survival</li>
            <Typography>The Receiving Party's obligations with respect to Confidential Information of the Disclosing Party will survive termination of this Agreement.</Typography>
          </ol>
          <li>Dispute Resolution</li>
          <ol>
            <li>Law</li>
            <Typography>This Agreement and any action related thereto will be governed, controlled, interpreted, and defined by and under the laws of {state.state}, without giving effect to any conflicts of laws principles that require the application of the law of a different state.</Typography>
            <li>Forum</li>
            <Typography>Any disputes under this Agreement may be brought in the state courts and the Federal courts for the county in which {state.party1}'s principal place of business is located, and the parties hereby consent to the personal jurisdiction and exclusive venue of these courts.</Typography>
          </ol>
          <li>Remedies</li>
          <ol>
            <li>Return or Destruction</li>
            <Typography>Upon termination or expiration of this Agreement, or upon written request of either Party, the Receiving Party will promptly return to the Disclosing Party or destroy all documents and other tangible materials representing Confidential Information and all copies thereof.</Typography>
            <li>Notice of Leak</li>
            <Typography>The Receiving Party will immediately notify the Disclosing Party upon discovery of any loss or unauthorized disclosure of the Confidential Information.</Typography>
            <li>Injunctions</li>
            <Typography>The Receiving Party hereby agrees that its breach of this Agreement will cause irreparable damage to the Disclosing Party for which recovery of damages would be inadequate, and that the Disclosing Party will be entitled to obtain timely injunctive relief under this Agreement, as well as such further relief as may be granted by a court of competent jurisdiction.</Typography>
          </ol>
          <li>Miscellaneous</li>
          <ol>
            <li>Amendment</li>
            <Typography>No modification of or amendment to this Agreement will be effective unless in writing and signed by the Party to be charged.</Typography>
            <li>Successors and Assigns</li>
            <FormControl component="fieldset">
              <FormLabel component="legend">Pick Clause</FormLabel>
              <RadioGroup aria-label="clause" name="clause1" value={value} onChange={handleChange}>
                {
                  firstChoice.map((val, i) => (
                    <FormControlLabel value={`${i}`} control={<Radio />} label={val} />
                  ))
                }
                {/* <FormControlLabel value="1" control={<Radio />} label="Clause 1" />
                <FormControlLabel value="2" control={<Radio />} label="Clause 2" />
                <FormControlLabel value="3" control={<Radio />} label="Clause 3" /> */}
              </RadioGroup>
            </FormControl>
            {/* <ol>
              <li>Select one:</li>
              <li>Select one:</li>
              <li>Select one:</li>
            </ol> */}
            <li>Entire Agreement</li>
            <Typography>Select one:</Typography>
            <li>Notices</li>
            <Typography>Any notice required or permitted by this Agreement shall be in writing and shall be delivered as follows with notice deemed given as indicated:</Typography>
            <ol>
              <li>by personal delivery when delivered personally;</li>
              <li>by overnight courier upon written verification of receipt;</li>
              <li>by telecopy or facsimile transmission upon acknowledgment of receipt of electronic transmission; or</li>
              <li>by certified or registered mail, return receipt requested, upon verification of receipt.</li>
            </ol>
            <li>Interpretation to Make Valid</li>
            <Typography>If any provision of this Agreement is found by a proper authority to be unenforceable or invalid, such unenforceability or invalidity will not render this Agreement unenforceable or invalid as a whole and, in such event, such provision will be changed and interpreted so as to best accomplish the objectives of such unenforceable or invalid provision within the limits of applicable law or applicable court decisions.</Typography>
            <li>U.S. Export Laws</li>
            <Typography>The Receiving Party will not export, directly or indirectly, any U.S. technical data acquired pursuant to this Agreement, or any products utilizing such data, in violation of the United States export laws or regulations.</Typography>
            <li>Waiver</li>
            <ol>
              <li>Any waiver or failure to enforce any provision of this Agreement by a Party on one occasion will not be deemed a waiver of any other provision or of such provision on any other occasion.</li>
              <li>A waiver of a breach of any provision of this Agreement by a Party shall not operate or be construed as a waiver of any other or subsequent breach.</li>
            </ol>
          </ol>
        </ol>
      </p>

      <Typography>
        <Box fontSize={19} textAlign="left" fontWeight="fontWeightBold" m={1}>
          Signature
        </Box>
        <Box textAlign="left" m={1}>
          IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date.
        </Box>
      </Typography>
      <Link to={{ pathname: '/render', 
        state: { 
          "effectiveDate": state.effectiveDate,
          "party1": state.party1,
          "party2": state.party2,
          "accessPerson": state.accessPerson,
          "confidentEnd": state.confidentEnd,
          "durationConfident": state.durationConfident,
          "endDate": state.endDate,
          "noticePeriod": state.noticePeriod,
          "state": state.state,
          "why": state.why,
          "firstSelection": firstChoice[parseInt(value)], 
          "secondSelection": value
          }}}>Generate an NDA</Link>
      <Button variant="outlined" color="primary" href="/render">Generate an NDA</Button>
  </Grid>
  )
};

const useStyles = makeStyles({
  appbar: {
    borderBottom: "3px solid rgb(212, 212, 212)",
  },
  container: {
    flexDirection: "column",
    marginBottom: 70
  },
  grid: {
    justifyContent: "center",
    marginTop: 20,
    textAlign: "center"
  },
  navbarDisplayFlex: {
    display: `flex`,
    alignItems: "center",
    justifyContent: "space-between",
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-evenly`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
});
export default Form;


