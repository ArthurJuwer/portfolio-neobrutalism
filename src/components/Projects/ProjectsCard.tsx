import { FunctionComponent, ReactNode } from "react";
import LanguageIcons from "./ProjectsLanguageIcons";

interface PropsProjectsCards {
  image: string;
  title: string;
  text?: string;
  website?: string;
  repository?: string;
  languagesIcons?: Array<number>;
}

const arrayNumbers: Array<{ id: number; name:string ; svg: ReactNode }> = [
  {
    id: 1,
    name: "Html 5",
    svg: <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_119_390)"><path d="M18.4932 1.05656C18.4171 0.962916 18.3078 0.909912 18.1937 0.909912H2.34141C2.22729 0.909912 2.11794 0.962916 2.04186 1.05656C1.9642 1.1502 1.92616 1.27564 1.93726 1.40285L3.36526 19.2351C3.37952 19.4224 3.49681 19.5779 3.65847 19.6309L10.155 21.698C10.1899 21.7104 10.2279 21.7157 10.2659 21.7157C10.304 21.7157 10.3404 21.7104 10.3769 21.698L16.8782 19.6309C17.0398 19.5779 17.1555 19.4224 17.1714 19.2351L18.5978 1.40285C18.6089 1.27564 18.5709 1.1502 18.4932 1.05656ZM15.0746 7.205H7.44164L7.6239 9.50713H14.8907L14.3455 16.3111L10.2644 17.6856L10.2247 17.6715L6.19115 16.3093L5.97085 13.5372H7.94723L8.03281 14.6132L10.2881 15.1397L12.5022 14.6132L12.7384 11.7015H5.82345L5.28617 5.00534H15.2505L15.0746 7.205Z" fill="#A3E636"/></g><defs><clipPath id="clip0_119_390"><rect width="20.2868" height="22.615" fill="white" transform="translate(0.124146 0.00537109)"/></clipPath></defs></svg>,
  },
  {
    id: 2,
    name: "Javascript",
    svg: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.8722 0.76001H1.85175C1.20834 0.76001 0.686096 1.28595 0.686096 1.93392V18.0661C0.686096 18.7141 1.20834 19.24 1.85175 19.24H17.8705C18.5139 19.24 19.0362 18.7141 19.0362 18.0678V1.93392C19.0362 1.28595 18.5139 0.76001 17.8722 0.76001ZM10.735 14.9208C10.735 16.6791 9.71095 17.48 8.21592 17.48C6.86423 17.48 5.88973 16.5674 5.49208 15.72L6.86594 14.883C7.13048 15.3556 7.53325 15.72 8.11352 15.72C8.66818 15.72 8.98733 15.5017 8.98733 14.6527V9.12001H10.735L10.735 14.9208ZM14.5255 17.48C12.9775 17.48 12.0986 16.6945 11.6088 15.72L12.9195 14.84C13.2762 15.4278 13.6653 15.9899 14.4879 15.9899C15.1791 15.9899 15.5409 15.6427 15.5409 15.1614C15.5409 14.5874 15.1655 14.3828 14.406 14.0477L13.9896 13.8672C12.7864 13.3516 11.9859 12.7053 11.9859 11.3372C11.9859 10.0791 12.94 9.12001 14.4282 9.12001C15.488 9.12001 16.2492 9.49126 16.7987 10.4641L15.5017 11.3045C15.215 10.7872 14.9078 10.5844 14.4282 10.5844C13.9401 10.5844 13.6312 10.8972 13.6312 11.3045C13.6312 11.8081 13.9401 12.011 14.6552 12.3238L15.0716 12.5042C16.4898 13.1144 17.2886 13.7383 17.2886 15.1408C17.2886 16.6516 16.1093 17.48 14.5255 17.48Z" fill="#A3E636"/>
    </svg>,
  },
  {
    id: 3,
    name: "React",
    svg: <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0726 1.75312C15.732 1.74158 15.3754 1.80139 15.0179 1.91812C14.3029 2.15156 13.5536 2.6065 12.7847 3.2364C12.4834 3.48325 12.1793 3.76544 11.8742 4.06483C11.5758 3.77304 11.278 3.49843 10.9833 3.25702C10.215 2.62763 9.4678 2.17252 8.75441 1.9396C8.04103 1.70668 7.3312 1.69946 6.74823 2.03843C6.16525 2.37739 5.81662 2.99963 5.66023 3.73827C5.50383 4.47692 5.52106 5.35655 5.67815 6.34132C5.73271 6.68338 5.81053 7.04222 5.89916 7.4078C5.56605 7.50947 5.24255 7.61637 4.94257 7.73436C4.03726 8.09046 3.28817 8.51648 2.74268 9.02343C2.19719 9.53037 1.84497 10.1456 1.84497 10.8212C1.84497 11.4968 2.19719 12.1112 2.74268 12.6182C3.28817 13.1251 4.03726 13.552 4.94257 13.9081C5.26334 14.0343 5.61062 14.1479 5.96913 14.2553C5.84018 14.7406 5.7357 15.2114 5.66449 15.6578C5.50728 16.6434 5.49068 17.5231 5.64743 18.2634C5.80418 19.0037 6.15298 19.6295 6.73884 19.9701C7.3247 20.3108 8.0377 20.3024 8.75271 20.069C9.46771 19.8355 10.2161 19.3814 10.985 18.7516C11.2836 18.507 11.5856 18.228 11.8879 17.9317C12.1917 18.2297 12.4949 18.5101 12.7949 18.7558C13.5632 19.3852 14.3113 19.8395 15.0247 20.0724C15.7381 20.3053 16.4479 20.3125 17.0309 19.9736C17.6139 19.6346 17.9616 19.0124 18.118 18.2737C18.2744 17.5351 18.2572 16.6563 18.1001 15.6716C18.0287 15.224 17.9242 14.7515 17.7946 14.2648C18.165 14.1547 18.5232 14.0381 18.8536 13.9081C19.7589 13.552 20.508 13.1251 21.0535 12.6182C21.599 12.1112 21.9512 11.4968 21.9512 10.8212C21.9512 10.1456 21.599 9.53037 21.0535 9.02343C20.508 8.51648 19.7589 8.09046 18.8536 7.73436C18.5493 7.61468 18.2209 7.50639 17.8825 7.40351C17.9719 7.03569 18.0512 6.67426 18.1061 6.33015C18.2633 5.34458 18.2799 4.46398 18.1232 3.72366C17.9664 2.98334 17.6168 2.35845 17.0309 2.0178C16.738 1.84748 16.4133 1.76465 16.0726 1.75312ZM16.0325 2.64858C16.2463 2.65447 16.4286 2.7057 16.5846 2.7964C16.8966 2.97779 17.1272 3.33083 17.2502 3.91187C17.3732 4.4929 17.369 5.27794 17.2238 6.18835C17.174 6.50006 17.1018 6.83041 17.0198 7.1689C16.1261 6.9523 15.1468 6.79157 14.1031 6.6971C13.5792 5.9661 13.0408 5.30013 12.498 4.70937C12.7851 4.42712 13.0703 4.16315 13.3488 3.93507C14.059 3.3532 14.7315 2.95727 15.2927 2.77405C15.5732 2.68244 15.8187 2.6427 16.0325 2.64858ZM7.74151 2.65116C7.9565 2.64512 8.20251 2.68476 8.48391 2.77663C9.04669 2.96038 9.72031 3.35613 10.4312 3.93851C10.704 4.16201 10.9829 4.42096 11.2641 4.69647C10.7173 5.29208 10.1744 5.96381 9.647 6.7014C8.6077 6.79758 7.6324 6.95918 6.74311 7.17663C6.66169 6.84003 6.58948 6.51137 6.54001 6.20124C6.39466 5.29004 6.39103 4.50489 6.51441 3.92218C6.63779 3.33947 6.87027 2.98376 7.18513 2.80069C7.34256 2.70916 7.52651 2.65721 7.74151 2.65116ZM11.8879 5.34272C12.2438 5.73278 12.5997 6.15962 12.9528 6.6189C12.6059 6.60433 12.2547 6.59569 11.8981 6.59569C11.5344 6.59569 11.1765 6.60461 10.8229 6.61976C11.176 6.16012 11.5319 5.73307 11.8879 5.34272ZM11.8981 7.48429C12.4922 7.48429 13.0713 7.50887 13.6346 7.55046C14.0222 8.11109 14.401 8.70585 14.7619 9.33538C15.079 9.88853 15.366 10.4408 15.6272 10.9862C15.3632 11.5389 15.0714 12.0987 14.7499 12.6594C14.4669 13.1531 14.1714 13.6219 13.871 14.074C13.2347 14.1275 12.5754 14.1573 11.8981 14.1573C11.2045 14.1573 10.5303 14.1258 9.87996 14.0697C9.58456 13.6241 9.29401 13.1624 9.01553 12.6766C8.69478 12.1171 8.4044 11.5584 8.14087 11.0069C8.40551 10.4522 8.69719 9.89039 9.0198 9.32765C9.37881 8.70142 9.75647 8.11009 10.1419 7.55218C10.7113 7.50966 11.2971 7.48429 11.8981 7.48429ZM14.7593 7.66046C15.4796 7.75096 16.1558 7.87661 16.7851 8.02741C16.5984 8.64392 16.3684 9.28787 16.0897 9.95241C15.9087 9.60111 15.7213 9.24861 15.5188 8.89538C15.2734 8.46732 15.0178 8.05921 14.7593 7.66046ZM8.98993 7.66733C8.73692 8.05863 8.48797 8.4588 8.24753 8.87819C8.04243 9.23595 7.85112 9.59319 7.66812 9.94897C7.39182 9.28842 7.16318 8.64814 6.97777 8.03515C7.60243 7.88407 8.27472 7.75887 8.98993 7.66733ZM17.6496 8.26116C17.9593 8.35554 18.2584 8.45402 18.5328 8.56194C19.3673 8.89021 20.0275 9.27893 20.4553 9.67655C20.8832 10.0742 21.0689 10.4534 21.0689 10.8212C21.0689 11.1891 20.8832 11.5683 20.4553 11.9659C20.0275 12.3636 19.3673 12.7523 18.5328 13.0805C18.2279 13.2005 17.8929 13.3092 17.5446 13.4123C17.2962 12.6384 16.9791 11.831 16.6017 11.0069C17.0356 10.0606 17.3861 9.13804 17.6496 8.26116ZM6.13212 8.26546C6.39255 9.13358 6.73858 10.047 7.16636 10.9837C6.78649 11.8126 6.46782 12.6246 6.21831 13.4028C5.88231 13.3025 5.55867 13.1967 5.26343 13.0805C4.42887 12.7523 3.76872 12.3636 3.34086 11.9659C2.91301 11.5683 2.72732 11.1891 2.72732 10.8212C2.72732 10.4534 2.91301 10.0742 3.34086 9.67655C3.76872 9.27893 4.42887 8.89021 5.26343 8.56194C5.53357 8.45568 5.82767 8.3586 6.13212 8.26546ZM11.8981 8.79999C10.6968 8.79999 9.71356 9.79018 9.71356 11C9.71356 12.2098 10.6968 13.2 11.8981 13.2C13.0994 13.2 14.0826 12.2098 14.0826 11C14.0826 9.79018 13.0994 8.79999 11.8981 8.79999ZM7.67836 12.0407C7.86217 12.3982 8.05333 12.757 8.25948 13.1166C8.42077 13.398 8.5855 13.6718 8.75271 13.9408C8.16596 13.8588 7.60821 13.7551 7.08444 13.6323C7.251 13.1185 7.45027 12.5852 7.67836 12.0407ZM16.1008 12.0407C16.3298 12.5865 16.5291 13.1206 16.6964 13.6357C16.171 13.7584 15.6115 13.8618 15.023 13.9433C15.1924 13.6711 15.3597 13.3938 15.5231 13.1089C15.7277 12.7519 15.9181 12.3956 16.1008 12.0407ZM6.83271 14.4865C7.62343 14.6751 8.48049 14.82 9.38929 14.9144C9.99597 15.7981 10.628 16.5922 11.2641 17.2863C10.9796 17.5656 10.6977 17.8277 10.4218 18.0537C9.71154 18.6356 9.03825 19.0307 8.47708 19.2139C7.91591 19.3971 7.49711 19.3729 7.18513 19.1916C6.87316 19.0102 6.64341 18.6571 6.52039 18.0761C6.39736 17.495 6.40076 16.7109 6.54599 15.8005C6.61187 15.3874 6.71033 14.9452 6.83271 14.4865ZM16.949 14.4899C17.0724 14.9514 17.1711 15.3953 17.2374 15.8108C17.3828 16.722 17.3864 17.5071 17.263 18.0898C17.1396 18.6725 16.9088 19.0291 16.594 19.2122C16.2791 19.3952 15.8563 19.4191 15.2935 19.2354C14.7307 19.0516 14.0571 18.6559 13.3462 18.0735C13.0683 17.8459 12.7845 17.5816 12.498 17.3001C13.1383 16.6032 13.7748 15.8051 14.3856 14.9162C15.2967 14.8224 16.1561 14.6783 16.949 14.4899ZM10.5293 15.0047C10.9779 15.0293 11.4325 15.0459 11.8981 15.0459C12.3483 15.0459 12.7881 15.0303 13.2225 15.0073C12.7784 15.6106 12.3258 16.1591 11.8751 16.653C11.4245 16.158 10.9728 15.6085 10.5293 15.0047Z" fill="#A3E636"/>
    </svg>,
  },
  {
    id: 4,
    name: "TailwindCSS",
    svg: <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.7239 3.09005C16.3848 2.94515 15.9921 3.08865 15.8274 3.42045C15.6717 3.73405 15.4639 3.92655 15.1921 4.00705C14.7668 4.13515 14.2587 3.97065 14.021 3.82995C13.7076 3.64445 13.3441 3.36305 12.9597 3.06555C11.733 2.11495 10.2068 0.93335 8.10919 0.93335C6.43141 0.93335 5.56959 1.80065 4.14272 3.23845C3.87097 3.51215 3.86888 3.95735 4.14063 4.23035C4.40474 4.49775 4.8287 4.50615 5.10115 4.25135C5.1081 4.24505 5.11505 4.23805 5.122 4.23175C5.50565 3.93355 7.92292 4.22335 8.97935 5.06895C10.5494 6.32545 11.683 7.23335 12.9743 7.23335C14.8224 7.23335 16.3653 6.01465 17.1027 3.97275C17.2285 3.62415 17.0624 3.23705 16.7239 3.09005ZM13.2488 7.99005C12.9097 7.84515 12.517 7.98865 12.3523 8.32045C12.1966 8.63405 11.9888 8.82655 11.717 8.90705C11.2917 9.03305 10.7836 8.87065 10.5459 8.72995C10.2325 8.54445 9.86897 8.26305 9.48463 7.96555C8.25792 7.01495 6.73166 5.83335 4.6341 5.83335C2.95632 5.83335 2.0945 6.70065 0.667628 8.13845C0.395876 8.41215 0.393791 8.85735 0.665543 9.13035C0.92965 9.39775 1.35431 9.40685 1.62675 9.15135C1.6337 9.14505 1.64065 9.13805 1.6476 9.13175C2.03056 8.83355 4.44922 9.12335 5.50495 9.96895C7.07431 11.2255 8.20788 12.1333 9.49923 12.1333C11.3473 12.1333 12.8902 10.9146 13.6276 8.87275C13.7534 8.52415 13.5873 8.13705 13.2488 7.99005Z" fill="#A3E636"/>
    </svg>,
  },
];

const ProjectsCard: FunctionComponent<PropsProjectsCards> = ({
  image,
  title,
  text,
  website,
  repository,
  languagesIcons,
}) => {
  return (
    <div className="flex flex-col gap-y-4 w-11/12 lg:w-full bg-mainGreen rounded-lg p-4 border-black border-2 shadow-neoBrutalism_200">
      <img
        src={image}
        alt={title}
        className="w-full bg-white border-black border-2 rounded-lg shadow-neoBrutalism"
      />
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      {text && <p className="text-justify">{text}</p>}
      <div className="w-full flex-wrap h-auto bg-white border-neoBrutalism shadow-neoBrutalism rounded-md flex gap-2 items-center justify-center py-2 px-0.5">
        {languagesIcons?.map((iconId) => {
          const icon = arrayNumbers.find((icon) => icon.id === iconId);
          return (
            icon && (
              <LanguageIcons key={icon.id} name={icon.name} iconSvg={icon.svg} />
            )
          );
        })}
      </div>
      <div className="flex justify-center gap-x-4">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 h-10 bg-white border-neoBrutalism shadow-neoBrutalism rounded-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Visitar
          </a>
        )}
        {repository && (
          <a
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            className={"w-1/2 h-10 bg-white border-neoBrutalism shadow-neoBrutalism rounded-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"}
          >
            Repositório
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
