import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { MapPin } from "lucide-react";

const HERO_IMAGE = "https://www.figma.com/api/mcp/asset/6f104d61-094d-4ba3-be25-30642f016766";
const LOGO_IMAGE = "https://www.figma.com/api/mcp/asset/60347403-c346-4780-812b-9163b324fb85";
const LOGO_FILL = "https://www.figma.com/api/mcp/asset/0de31500-da54-46b5-917f-ac295c3697b9";
const FACEBOOK_ICON = "https://www.figma.com/api/mcp/asset/26e4bacc-c5e2-482e-96d5-121ade147d3d";
const LINE_ICON = "https://www.figma.com/api/mcp/asset/6fde93aa-7c9f-4ce4-a7c4-aaa30372657e";

const TOKENS = {
  color: {
    textPrimary: "#000000",
    textSecondary: "#999999",
    textInverse: "#FEFEFE",
    bgPrimary: "#FEFEFE",
    bgSecondary: "#C3C3C3",
    bgTertiary: "#F2F2F2",
    borderPrimary: "#555555",
    borderSubtle: "#B8B8B8",
  },
  shadow: "0 4px 10px rgba(0,0,0,0.05)",
};

const STAGES = ["小組賽", "32強賽", "16強賽", "8強賽", "4強賽", "季軍賽", "決賽"];

const MATCHES = [
  {
    stage: "小組賽",
    group: "A組",
    date: "6/12 03:00",
    venue: "墨西哥城, Mexico City Stadium",
    home: { name: "FIFA附加賽2", flagCode: "mx" },
    away: { name: "南非", flagCode: "za" },
    score: "3 - 3",
    scoreNote: "(4 PK 2)",
  },
  {
    stage: "小組賽",
    group: "C組",
    date: "6/12 10:00",
    venue: "瓜達拉哈拉, Estadio Guadalajara",
    home: { name: "韓國", flagCode: "kr" },
    away: { name: "歐洲A附加賽", flagCode: "tbd" },
    score: "-",
  },
  {
    stage: "小組賽",
    group: "B組",
    date: "6/13 03:00",
    venue: "多倫多, Toronto Stadium",
    home: { name: "加拿大", flagCode: "ca" },
    away: { name: "歐洲B附加賽", flagCode: "tbd" },
    score: "-",
  },
  {
    stage: "小組賽",
    group: "D組",
    date: "6/13 09:00",
    venue: "英格爾伍德, Los Angeles Stadium",
    home: { name: "美國", flagCode: "us" },
    away: { name: "巴拉圭", flagCode: "py" },
    score: "-",
  },
  {
    stage: "小組賽",
    group: "F組",
    date: "6/14 09:00",
    venue: "波士頓, Boston Stadium",
    home: { name: "海地", flagCode: "ht" },
    away: { name: "蘇格蘭", flagCode: "gb-sct" },
    score: "-",
  },
  {
    stage: "小組賽",
    group: "I組",
    date: "6/13 12:00",
    venue: "溫哥華, BC Place Vancouver",
    home: { name: "澳洲", flagCode: "au" },
    away: { name: "歐洲D附加賽", flagCode: "tbd" },
    score: "-",
  },
  {
    stage: "小組賽",
    group: "G組",
    date: "6/14 06:00",
    venue: "紐約市, New York New Jersey Stadium",
    home: { name: "巴西", flagCode: "br" },
    away: { name: "摩洛哥", flagCode: "ma" },
    score: "-",
  },
  {
    stage: "小組賽",
    group: "H組",
    date: "6/14 03:00",
    venue: "舊金山灣區, San Francisco Bay Area Stadium",
    home: { name: "卡達", flagCode: "qa" },
    away: { name: "瑞士", flagCode: "ch" },
    score: "-",
  },
  {
    stage: "小組賽",
    group: "J組",
    date: "6/15 07:00",
    venue: "費城, Philadelphia Stadium",
    home: { name: "象牙海岸", flagCode: "ci" },
    away: { name: "厄瓜多", flagCode: "ec" },
    score: "-",
  },
  {
    stage: "小組賽",
    group: "E組",
    date: "6/15 01:00",
    venue: "休士頓, Houston Stadium",
    home: { name: "德國", flagCode: "de" },
    away: { name: "吉拉索", flagCode: "cw" },
    score: "-",
  },
  {
    stage: "小組賽",
    group: "L組",
    date: "6/15 04:00",
    venue: "西雅圖, Seattle Stadium",
    home: { name: "荷蘭", flagCode: "nl" },
    away: { name: "日本", flagCode: "jp" },
    score: "-",
  },
  {
    stage: "小組賽",
    group: "K組",
    date: "6/15 10:00",
    venue: "蒙特雷, Estadio Monterrey",
    home: { name: "義大利哈薩", flagCode: "tbd" },
    away: { name: "突尼西亞", flagCode: "tn" },
    score: "-",
  },
  {
    stage: "小組賽",
    group: "E組",
    date: "6/16 06:00",
    venue: "邁阿密, Miami Stadium",
    home: { name: "沙烏地阿拉伯", flagCode: "sa" },
    away: { name: "烏拉圭", flagCode: "uy" },
    score: "-",
  },
  {
    stage: "小組賽",
    group: "D組",
    date: "6/16 00:00",
    venue: "亞特蘭大, Atlanta Stadium",
    home: { name: "西班牙", flagCode: "es" },
    away: { name: "烏茲別克", flagCode: "uz" },
    score: "-",
  },
  {
    stage: "小組賽",
    group: "H組",
    date: "6/16 09:00",
    venue: "洛杉磯, Los Angeles Stadium",
    home: { name: "伊朗", flagCode: "ir" },
    away: { name: "紐西蘭", flagCode: "nz" },
    score: "-",
  },
  {
    stage: "32強賽",
    group: "32強賽",
    date: "7/02 00:00",
    venue: "達拉斯, Dallas Stadium",
    home: { name: "巴西", flagCode: "br" },
    away: { name: "日本", flagCode: "jp" },
    score: "2 - 1",
  },
  {
    stage: "32強賽",
    group: "32強賽",
    date: "7/02 04:00",
    venue: "西雅圖, Seattle Stadium",
    home: { name: "德國", flagCode: "de" },
    away: { name: "韓國", flagCode: "kr" },
    score: "1 - 0",
  },
  {
    stage: "32強賽",
    group: "32強賽",
    date: "7/02 08:00",
    venue: "休士頓, Houston Stadium",
    home: { name: "阿根廷", flagCode: "ar" },
    away: { name: "美國", flagCode: "us" },
    score: "3 - 2",
    scoreNote: "(延長賽)",
  },
  {
    stage: "32強賽",
    group: "32強賽",
    date: "7/03 00:00",
    venue: "邁阿密, Miami Stadium",
    home: { name: "葡萄牙", flagCode: "pt" },
    away: { name: "摩洛哥", flagCode: "ma" },
    score: "0 - 0",
    scoreNote: "(5 PK 4)",
  },
  {
    stage: "32強賽",
    group: "32強賽",
    date: "7/03 04:00",
    venue: "亞特蘭大, Atlanta Stadium",
    home: { name: "法國", flagCode: "fr" },
    away: { name: "墨西哥", flagCode: "mx" },
    score: "2 - 0",
  },
  {
    stage: "16強賽",
    group: "16強賽",
    date: "7/06 01:00",
    venue: "費城, Philadelphia Stadium",
    home: { name: "巴西", flagCode: "br" },
    away: { name: "葡萄牙", flagCode: "pt" },
    score: "1 - 1",
    scoreNote: "(4 PK 3)",
  },
  {
    stage: "16強賽",
    group: "16強賽",
    date: "7/06 05:00",
    venue: "洛杉磯, Los Angeles Stadium",
    home: { name: "德國", flagCode: "de" },
    away: { name: "法國", flagCode: "fr" },
    score: "2 - 1",
  },
  {
    stage: "16強賽",
    group: "16強賽",
    date: "7/06 09:00",
    venue: "波士頓, Boston Stadium",
    home: { name: "阿根廷", flagCode: "ar" },
    away: { name: "西班牙", flagCode: "es" },
    score: "3 - 1",
  },
  {
    stage: "16強賽",
    group: "16強賽",
    date: "7/07 01:00",
    venue: "紐約市, New York New Jersey Stadium",
    home: { name: "日本", flagCode: "jp" },
    away: { name: "瑞士", flagCode: "ch" },
    score: "0 - 1",
  },
  {
    stage: "16強賽",
    group: "16強賽",
    date: "7/07 05:00",
    venue: "舊金山灣區, San Francisco Bay Area Stadium",
    home: { name: "英格蘭", flagCode: "gb" },
    away: { name: "荷蘭", flagCode: "nl" },
    score: "2 - 2",
    scoreNote: "(3 PK 5)",
  },
  {
    stage: "8強賽",
    group: "8強賽",
    date: "7/10 02:00",
    venue: "西雅圖, Seattle Stadium",
    home: { name: "巴西", flagCode: "br" },
    away: { name: "德國", flagCode: "de" },
    score: "1 - 0",
  },
  {
    stage: "8強賽",
    group: "8強賽",
    date: "7/10 06:00",
    venue: "亞特蘭大, Atlanta Stadium",
    home: { name: "阿根廷", flagCode: "ar" },
    away: { name: "荷蘭", flagCode: "nl" },
    score: "2 - 1",
  },
  {
    stage: "8強賽",
    group: "8強賽",
    date: "7/11 02:00",
    venue: "邁阿密, Miami Stadium",
    home: { name: "法國", flagCode: "fr" },
    away: { name: "英格蘭", flagCode: "gb" },
    score: "0 - 1",
  },
  {
    stage: "8強賽",
    group: "8強賽",
    date: "7/11 06:00",
    venue: "費城, Philadelphia Stadium",
    home: { name: "葡萄牙", flagCode: "pt" },
    away: { name: "西班牙", flagCode: "es" },
    score: "1 - 3",
  },
  {
    stage: "8強賽",
    group: "8強賽",
    date: "7/11 10:00",
    venue: "休士頓, Houston Stadium",
    home: { name: "日本", flagCode: "jp" },
    away: { name: "克羅埃西亞", flagCode: "hr" },
    score: "2 - 0",
  },
  {
    stage: "4強賽",
    group: "4強賽",
    date: "7/14 03:00",
    venue: "達拉斯, Dallas Stadium",
    home: { name: "巴西", flagCode: "br" },
    away: { name: "阿根廷", flagCode: "ar" },
    score: "2 - 2",
    scoreNote: "(5 PK 4)",
  },
  {
    stage: "4強賽",
    group: "4強賽",
    date: "7/15 03:00",
    venue: "紐約市, New York New Jersey Stadium",
    home: { name: "英格蘭", flagCode: "gb" },
    away: { name: "西班牙", flagCode: "es" },
    score: "1 - 2",
  },
  {
    stage: "4強賽",
    group: "4強賽",
    date: "7/15 07:00",
    venue: "波士頓, Boston Stadium",
    home: { name: "法國", flagCode: "fr" },
    away: { name: "德國", flagCode: "de" },
    score: "0 - 1",
  },
  {
    stage: "4強賽",
    group: "4強賽",
    date: "7/15 11:00",
    venue: "邁阿密, Miami Stadium",
    home: { name: "葡萄牙", flagCode: "pt" },
    away: { name: "荷蘭", flagCode: "nl" },
    score: "3 - 1",
  },
  {
    stage: "4強賽",
    group: "4強賽",
    date: "7/16 03:00",
    venue: "亞特蘭大, Atlanta Stadium",
    home: { name: "日本", flagCode: "jp" },
    away: { name: "克羅埃西亞", flagCode: "hr" },
    score: "1 - 0",
  },
  {
    stage: "季軍賽",
    group: "季軍賽",
    date: "7/18 04:00",
    venue: "邁阿密, Miami Stadium",
    home: { name: "阿根廷", flagCode: "ar" },
    away: { name: "英格蘭", flagCode: "gb" },
    score: "2 - 1",
  },
  {
    stage: "季軍賽",
    group: "季軍賽",
    date: "7/18 08:00",
    venue: "休士頓, Houston Stadium",
    home: { name: "法國", flagCode: "fr" },
    away: { name: "葡萄牙", flagCode: "pt" },
    score: "1 - 1",
    scoreNote: "(4 PK 5)",
  },
  {
    stage: "季軍賽",
    group: "季軍賽",
    date: "7/18 12:00",
    venue: "波士頓, Boston Stadium",
    home: { name: "德國", flagCode: "de" },
    away: { name: "日本", flagCode: "jp" },
    score: "3 - 0",
  },
  {
    stage: "季軍賽",
    group: "季軍賽",
    date: "7/19 04:00",
    venue: "費城, Philadelphia Stadium",
    home: { name: "荷蘭", flagCode: "nl" },
    away: { name: "克羅埃西亞", flagCode: "hr" },
    score: "2 - 2",
    scoreNote: "(6 PK 5)",
  },
  {
    stage: "季軍賽",
    group: "季軍賽",
    date: "7/19 08:00",
    venue: "洛杉磯, Los Angeles Stadium",
    home: { name: "西班牙", flagCode: "es" },
    away: { name: "瑞士", flagCode: "ch" },
    score: "2 - 0",
  },
  {
    stage: "決賽",
    group: "決賽",
    date: "7/20 03:00",
    venue: "紐約市, New York New Jersey Stadium",
    home: { name: "巴西", flagCode: "br" },
    away: { name: "西班牙", flagCode: "es" },
    score: "2 - 1",
  },
  {
    stage: "決賽",
    group: "決賽",
    date: "7/20 07:00",
    venue: "達拉斯, Dallas Stadium",
    home: { name: "阿根廷", flagCode: "ar" },
    away: { name: "德國", flagCode: "de" },
    score: "1 - 0",
  },
  {
    stage: "決賽",
    group: "決賽",
    date: "7/20 11:00",
    venue: "邁阿密, Miami Stadium",
    home: { name: "法國", flagCode: "fr" },
    away: { name: "葡萄牙", flagCode: "pt" },
    score: "3 - 2",
  },
  {
    stage: "決賽",
    group: "決賽",
    date: "7/21 03:00",
    venue: "費城, Philadelphia Stadium",
    home: { name: "英格蘭", flagCode: "gb" },
    away: { name: "荷蘭", flagCode: "nl" },
    score: "2 - 3",
  },
  {
    stage: "決賽",
    group: "決賽",
    date: "7/21 07:00",
    venue: "亞特蘭大, Atlanta Stadium",
    home: { name: "日本", flagCode: "jp" },
    away: { name: "巴西", flagCode: "br" },
    score: "0 - 2",
  },
];

function NavLink({ children, active = false }) {
  return (
    <button
      type="button"
      className={`text-[20px] font-medium leading-[1.5] transition ${
        active ? "text-[#FEFEFE]" : "text-[#999999] hover:text-[#FEFEFE]"
      }`}
    >
      {children}
    </button>
  );
}

function SocialLink({ href, src, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block"
      aria-label={label}
    >
      <img src={src} alt="" className="h-9 w-9" />
    </a>
  );
}

function getFlagUrl(flagCode) {
  if (flagCode === "gb-sct") return "https://flagcdn.com/w80/gb-sct.png";
  return `https://flagcdn.com/w80/${flagCode}.png`;
}

function FlagBadge({ code, label }) {
  const isText = code === "tbd";

  return (
    <div className="flex h-[50px] w-[75px] items-center justify-center overflow-hidden border border-[#dddddd] bg-white text-center">
      {isText ? (
        <span className="font-['Inter',sans-serif] text-[13px] font-bold leading-[1] text-[#999999]">TBD</span>
      ) : (
        <img
          src={getFlagUrl(code)}
          alt={`${label} 國旗`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
}

function MatchCard({ match }) {
  const scoreParts = match.score.split(" ");

  return (
    <article
      className="flex w-full flex-col gap-6 rounded-[8px] bg-[#FEFEFE] px-[28px] py-[20px] md:h-[140px] md:flex-row md:items-center md:justify-center"
      style={{ boxShadow: TOKENS.shadow }}
    >
      <div className="flex min-w-0 flex-[1_0_0] flex-col gap-[8px] md:min-h-px md:min-w-px">
        <span className="inline-flex w-fit rounded-[36px] bg-[#F2F2F2] px-[16px] py-[4px] text-[13px] font-medium leading-[1.5] tracking-[0.01em] text-[#999999]">
          {match.group}
        </span>
        <div className="text-[24px] font-bold leading-[1.5] text-[#000000]">{match.date}</div>
        <div className="flex items-center gap-[4px] text-[13px] font-medium leading-[1.5] tracking-[0.01em] text-[#999999]">
          <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.75} />
          <span className="min-w-0 flex-1 truncate">{match.venue}</span>
        </div>
      </div>

      <div className="flex w-full flex-col items-stretch gap-4 md:h-[90px] md:w-[320px] md:flex-row md:items-center md:justify-between md:gap-0 md:pt-[6px]">
        <div className="flex w-full items-center justify-between gap-3 md:w-[116.666px] md:flex-col">
          <div className="flex flex-col items-center gap-[8px] md:w-[116.666px]">
            <FlagBadge code={match.home.flagCode} label={match.home.name} />
            <div className="min-w-full text-center text-[18px] font-bold leading-[1.75] tracking-[0.04em] text-[#000000]">
              {match.home.name}
            </div>
          </div>
        </div>

        <div className="flex min-w-[86.668px] flex-col items-center justify-center gap-[4px] md:h-[82px] md:w-[86.668px]">
          <div className="flex h-[50px] items-center justify-center gap-[14px] text-center">
            {scoreParts.map((part, index) => (
              <div
                key={`${match.date}-${part}-${index}`}
                className={`text-[36px] font-bold leading-[1.4] tracking-[0.04em] ${
                  part === "-" ? "text-[#999999]" : "text-[#000000]"
                }`}
              >
                {part}
              </div>
            ))}
          </div>
          {match.scoreNote ? (
            <div className="text-[13px] font-medium leading-[1.5] tracking-[0.01em] text-[#999999]">{match.scoreNote}</div>
          ) : null}
        </div>

        <div className="flex w-full items-center justify-between gap-3 md:w-[116.666px] md:flex-col">
          <div className="flex flex-col items-center gap-[8px] md:w-[116.666px]">
            <FlagBadge code={match.away.flagCode} label={match.away.name} />
            <div className="min-w-full text-center text-[18px] font-bold leading-[1.75] tracking-[0.04em] text-[#000000]">
              {match.away.name}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function MobilePrimaryNav() {
  return (
    <nav className="flex h-[50px] items-center justify-between bg-black px-[20px]">
      <button type="button" className="text-[18px] font-bold leading-[30px] text-[#999999]">
        首頁
      </button>
      <button type="button" className="text-[18px] font-bold leading-[30px] text-[#FEFEFE]">
        賽程
      </button>
      <button type="button" className="text-[18px] font-bold leading-[30px] text-[#999999]">
        各組戰績
      </button>
      <button type="button" className="text-[18px] font-bold leading-[30px] text-[#999999]">
        賽事焦點
      </button>
    </nav>
  );
}

function MobileStageTabs({ activeStage, onStageChange }) {
  return (
    <div className="h-[50px] overflow-x-auto bg-[#C3C3C3] px-[20px] scrollbar-none">
      <div className="flex h-full min-w-max items-center">
        {STAGES.map((stage) => {
          const active = stage === activeStage;
          return (
            <button
              key={stage}
              type="button"
              onClick={() => onStageChange(stage)}
              className={`h-[30px] shrink-0 rounded-full px-[12px] text-[18px] font-bold leading-[30px] ${
                active ? "bg-[#FEFEFE] text-[#000000]" : "text-[#000000]"
              }`}
            >
              {stage}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MobileFlagBadge({ code, label }) {
  const isText = code === "tbd";

  return (
    <div className="flex h-[32px] w-[48px] items-center justify-center overflow-hidden border border-[#dddddd] bg-white text-center">
      {isText ? (
        <span className="font-['Inter',sans-serif] text-[10px] font-bold leading-none text-[#999999]">TBD</span>
      ) : (
        <img src={getFlagUrl(code)} alt={`${label} 國旗`} className="h-full w-full object-cover" loading="lazy" />
      )}
    </div>
  );
}

function MobileMatchCard({ match }) {
  const scoreParts = match.score.split(" ");

  return (
    <article className="h-[86px] w-full rounded-[8px] bg-[#FEFEFE] px-[12px] py-[12px]" style={{ boxShadow: TOKENS.shadow }}>
      <div className="flex h-full items-center gap-[12px]">
        <div className="flex min-w-[104px] flex-col gap-[6px]">
          <span className="inline-flex w-fit rounded-full bg-[#F2F2F2] px-[16px] py-[4px] text-[13px] font-medium leading-[19.5px] tracking-[1px] text-[#999999]">
            {match.group}
          </span>
          <div className="text-[18px] font-bold leading-[30px] text-[#000000]">{match.date}</div>
        </div>

        <div className="ml-auto flex items-center gap-[8px]">
          <div className="flex w-[76px] flex-col items-center gap-[4px]">
            <MobileFlagBadge code={match.home.flagCode} label={match.home.name} />
            <div className="w-full whitespace-nowrap text-center text-[13px] font-medium leading-[19.5px] text-[#000000]">
              {match.home.name}
            </div>
          </div>

          <div className="flex w-[56px] items-center justify-center gap-[8px]">
            {scoreParts.map((part, index) => (
              <span
                key={`${match.date}-${part}-${index}-mobile`}
                className={`text-[20px] font-bold leading-[28px] ${part === "-" ? "text-[#999999]" : "text-[#000000]"}`}
              >
                {part}
              </span>
            ))}
          </div>

          <div className="flex w-[76px] flex-col items-center gap-[4px]">
            <MobileFlagBadge code={match.away.flagCode} label={match.away.name} />
            <div className="w-full whitespace-nowrap text-center text-[13px] font-medium leading-[19.5px] text-[#000000]">
              {match.away.name}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function DesktopTopBar() {
  return (
    <>
      <header className="bg-black">
        <div className="mx-auto flex h-[77px] w-full max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-6">
          <a href="/" className="block">
            <span className="sr-only">TVBS</span>
            <span
              className="block h-[47px] w-[90px]"
              style={{
                backgroundColor: "#ffffff",
                WebkitMaskImage: `url(${LOGO_IMAGE})`,
                maskImage: `url(${LOGO_IMAGE})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                backgroundImage: `url(${LOGO_FILL})`,
                backgroundSize: "cover",
              }}
            />
          </a>

          <nav className="hidden items-center gap-[48px] md:flex">
            <NavLink>首頁</NavLink>
            <NavLink active>賽程</NavLink>
            <NavLink>各組戰績</NavLink>
            <NavLink>賽事焦點</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <SocialLink href="https://www.facebook.com/tvbsfb" src={FACEBOOK_ICON} label="Facebook" />
            <SocialLink href="https://line.me/R/ti/p/%40tvbs" src={LINE_ICON} label="LINE" />
          </div>
        </div>
      </header>

      <div className="h-[140px] bg-black sm:h-[200px] md:h-[254px]">
        <img src={HERO_IMAGE} alt="2026 世界盃足球賽" className="h-full w-full object-cover" />
      </div>
    </>
  );
}

export default function FifaSchedulePage() {
  const [activeStage, setActiveStage] = useState("小組賽");
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);
  const stickyTabsRef = useRef(null);
  const sectionRef = useRef(null);
  const tabsAnchorRef = useRef(null);
  const stageOffsetsRef = useRef({ 小組賽: 0 });
  const pendingScrollTargetRef = useRef(null);
  const matchesByStage = useMemo(
    () =>
      STAGES.reduce((accumulator, stage) => {
        accumulator[stage] = MATCHES.filter((match) => match.stage === stage);
        return accumulator;
      }, {}),
    [],
  );
  const matches = matchesByStage[activeStage] ?? [];
  const maxMatchCount = useMemo(
    () => Math.max(...Object.values(matchesByStage).map((stageMatches) => stageMatches.length || 1)),
    [matchesByStage],
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    if (pendingScrollTargetRef.current == null) return;
    const targetY = pendingScrollTargetRef.current;
    window.scrollTo({ top: targetY, behavior: "auto" });
    requestAnimationFrame(() => {
      window.scrollTo({ top: targetY, behavior: "auto" });
    });
    pendingScrollTargetRef.current = null;
  }, [activeStage]);

  function getStickyMetrics() {
    const stickyTabsHeight = stickyTabsRef.current?.offsetHeight ?? 0;
    const tabsAnchorTop = tabsAnchorRef.current
      ? window.scrollY + tabsAnchorRef.current.getBoundingClientRect().top
      : window.scrollY;
    const sectionTop = sectionRef.current
      ? window.scrollY + sectionRef.current.getBoundingClientRect().top
      : window.scrollY;
    const stickyStartY = tabsAnchorTop;
    const contentStartYWhenSticky = sectionTop - stickyTabsHeight;

    return {
      stickyTabsHeight,
      stickyStartY,
      contentStartYWhenSticky,
    };
  }

  function handleStageChange(stage) {
    if (stage === activeStage) return;

    const currentScrollY = window.scrollY;
    const { stickyStartY, contentStartYWhenSticky } = getStickyMetrics();
    const isSticky = currentScrollY >= stickyStartY;

    if (isSticky) {
      stageOffsetsRef.current[activeStage] = Math.max(0, currentScrollY - contentStartYWhenSticky);
    }

    if (isSticky) {
      const nextOffset = stageOffsetsRef.current[stage] ?? 0;
      pendingScrollTargetRef.current = contentStartYWhenSticky + nextOffset;
    } else {
      pendingScrollTargetRef.current = currentScrollY;
    }

    setActiveStage(stage);
  }

  return (
    <div
      className="min-h-screen bg-[#F2F2F2] font-['Noto_Sans_TC',sans-serif] text-black"
      style={{
        "--color-text-primary": TOKENS.color.textPrimary,
        "--color-text-secondary": TOKENS.color.textSecondary,
        "--color-text-inverse": TOKENS.color.textInverse,
        "--color-bg-primary": TOKENS.color.bgPrimary,
        "--color-bg-secondary": TOKENS.color.bgSecondary,
        "--color-bg-tertiary": TOKENS.color.bgTertiary,
        "--color-border-primary": TOKENS.color.borderPrimary,
        "--color-border-subtle": TOKENS.color.borderSubtle,
      }}
    >
      {isMobile ? (
        <>
          <header className="bg-black">
            <div className="h-[60px] bg-black">
              <img src={HERO_IMAGE} alt="2026 世界盃足球賽" className="h-full w-full object-cover" />
            </div>
            <MobilePrimaryNav />
          </header>

          <div ref={tabsAnchorRef} className="w-full" />
          <div ref={stickyTabsRef} className="sticky top-0 z-30 bg-[#C3C3C3]">
            <MobileStageTabs activeStage={activeStage} onStageChange={handleStageChange} />
          </div>

          <main className="bg-[#F2F2F2] pb-[64px] pt-[40px]">
            <h1 className="text-center text-[36px] font-bold leading-[50px] tracking-[4px] text-[#000000]">賽程</h1>

            <section
              ref={sectionRef}
              className="mt-[20px] w-full px-[20px]"
              style={{ minHeight: `${Math.max(1, maxMatchCount) * 96}px` }}
            >
              {STAGES.map((stage) => {
                const stageMatches = matchesByStage[stage] ?? [];
                const isActive = stage === activeStage;

                return (
                  <div key={stage} className={`${isActive ? "flex" : "hidden"} w-full flex-col gap-[10px]`} aria-hidden={!isActive}>
                    {stageMatches.map((match) => (
                      <MobileMatchCard key={`${stage}-${match.date}-${match.home.name}-${match.away.name}-mobile`} match={match} />
                    ))}
                  </div>
                );
              })}
            </section>
          </main>
        </>
      ) : (
        <>
          <DesktopTopBar />

          <main className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-4 pb-16 pt-[48px] sm:px-6">
            <h1 className="text-center text-[42px] font-bold leading-[1.4] tracking-[0.04em] text-[#000000]">賽程</h1>

            <div ref={tabsAnchorRef} className="mt-[2px] w-full" />
            <div ref={stickyTabsRef} className="-mt-[12px] sticky top-0 z-30 w-full bg-[#F2F2F2] py-[12px]">
              <div className="mx-auto flex h-[57px] w-full max-w-[747.706px] items-start rounded-[54px] border border-[rgba(184,184,184,0.46)] bg-[rgba(242,242,242,0.95)] px-[8px] py-[6px] backdrop-blur-[5px]">
                {STAGES.map((stage) => {
                  const active = stage === activeStage;

                  return (
                    <button
                      key={stage}
                      type="button"
                      onClick={() => handleStageChange(stage)}
                      className={`h-[45px] w-[104px] shrink-0 rounded-[39px] px-[12px] py-[4px] text-center text-[18px] font-bold leading-[1.75] tracking-[0.04em] transition ${
                        active ? "bg-black text-[#FEFEFE]" : "text-[#000000] hover:bg-black/5"
                      }`}
                    >
                      {stage}
                    </button>
                  );
                })}
              </div>
            </div>

            <section
              ref={sectionRef}
              className="mt-[24px] w-full max-w-[747px]"
              style={{ minHeight: `${Math.max(1, maxMatchCount) * 148}px` }}
            >
              {STAGES.map((stage) => {
                const stageMatches = matchesByStage[stage] ?? [];
                const isActive = stage === activeStage;

                return (
                  <div
                    key={stage}
                    className={`${isActive ? "flex" : "hidden"} w-full flex-col gap-[8px]`}
                    aria-hidden={!isActive}
                  >
                    {stageMatches.map((match) => (
                      <MatchCard key={`${stage}-${match.date}-${match.home.name}-${match.away.name}`} match={match} />
                    ))}
                  </div>
                );
              })}
            </section>
          </main>
        </>
      )}

      <footer className="bg-black px-4 py-[10px] text-center text-[13px] font-medium leading-[20px] tracking-[0.13px] text-[#FEFEFE]">
        © TVBS Media Inc. All Rights Reserved.
      </footer>
    </div>
  );
}
