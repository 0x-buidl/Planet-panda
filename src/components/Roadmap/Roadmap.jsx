import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TwitterIcon from "@mui/icons-material/Twitter";
import { BsDiscord } from "react-icons/bs";
import cupPanda from "../../images/rdmapPanda.png";

function Roadmap() {
  return (
    <section className="roadmap pb-3" id="roadMap">
      <div className="roadmap-part-1 pb-4">
        <div className="container">
          <h1 className="desc-head pt-5">
            Road <span>Map</span>
          </h1>
          <div className="phase-heading mx-auto p-2 mt-4">
            <p>
              Phase 1 -&gt; Q4 2021
              <KeyboardArrowDownIcon
                style={{ opacity: "0.5", fontSize: "105%" }}
              />
            </p>
          </div>
          <div className="phase-content mx-auto p-2 mt-2">
            <p>
              Launch Presale for early community members which will be open for
              12 hours. Apply for listing on howrare.is and sol marketplaces.
              <br />
              (MagicEDEN, FTX, Solanart)
            </p>
          </div>
          <div className="phase-heading mx-auto p-2 mt-5 mt-lg-4">
            <p>
              Phase 2 -&gt; Q4 2021
              <KeyboardArrowDownIcon
                style={{ opacity: "0.5", fontSize: "105%" }}
              />
            </p>
          </div>
          <div className="phase-content mx-auto p-2 mt-2 ">
            <p>
              Launch Public Sale where the remaining pandas will be sold to the
              public. Make sure to join our discord for any giveaway
              opportunities! The reveal will be instant, no having to wait to
              see your new Panda.
            </p>
          </div>
        </div>
      </div>
      <div className="roadmap-part-2 pb-4 mt-4">
        <div className="container">
          <div className="phase-heading mx-auto p-2">
            <p>
              Phase 3 -&gt; Q4 2021
              <KeyboardArrowDownIcon
                style={{ opacity: "0.5", fontSize: "105%" }}
              />
            </p>
          </div>
          <div className="phase-content mx-auto p-2 mt-2">
            <p>
              10% of every sale we make including royalties will be donated to a
              wildlife conservation charity voted and chosen by the community in
              discord. I will create a community treasury wallet where 80% of
              royalties will be put into that wallet. The use of the wallet will
              be completely decided by the community where we may donate more to
              charity, fund other artists, or do more community giveaways!
              Creation of next christmas special airdrop which will be free for
              all Panda holders.
            </p>
          </div>
          <div className="phase-heading mx-auto p-2 mt-5">
            <p>
              Phase 4 -&gt; Q4 2021
              <KeyboardArrowDownIcon
                style={{ opacity: "0.5", fontSize: "105%" }}
              />
            </p>
          </div>
          <div className="phase-content mx-auto p-2 mt-2 ">
            <p>
              Launch Public Sale where the remaining pandas will be sold to the
              public. Make sure to join our discord for any giveaway
              opportunities! The reveal will be instant, no having to wait to
              see your new Panda.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 hr">
        <div className="container">
          <p className="phase-conc mx-auto">
            Each Panda gives you access to future <span>free airdrops</span>.
            What will be the next Planet we discover<span> ?</span>
          </p>
          <div>
            <img
              src={cupPanda}
              className="phase-panda"
              alt="panda-in-cup"
              height="200px"
            />
          </div>
        </div>
      </div>
      <footer className="container text-start">
        <h1 className="footer-logo">
          <span>Planet</span> <br /> PANDA
        </h1>
        <p className="footer-desc mt-2">
          Welcome to Planet Panda, <br />
          <span>7500</span> uniquely generated Panda NFTs
        </p>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link p-2" href="#twt">
              <TwitterIcon />
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link p-2" href="#dis">
              <BsDiscord />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}

export default Roadmap;
