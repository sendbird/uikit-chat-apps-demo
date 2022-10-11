import IconArrowLeft from "./icon-arrow-left.svg";

const ChatHeader = ({ channel, onBack }) => (
  <div className="custom-channel-header">
    <button  className="back-button" onClick={onBack}>
      <img width={20} heigth={20} src={IconArrowLeft} alt="Back button" />
    </button>
    {/* <img width={20} heigth={20} src={IconArrowLeft} alt="Icon" /> */}
    <span>{channel.name}</span>
  </div>
);

export default ChatHeader;
