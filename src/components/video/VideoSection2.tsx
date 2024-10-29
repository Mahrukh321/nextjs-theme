"use client";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";
import { useAppDispatch } from "../../redux/hooks";
import { toggleVideoModalOpen } from "../../redux/features/videoModalSlice";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const VideoSection2 = () => {
  const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <DivAnimateYAxis visible className="rv-2-video">
      <div className="container">
        <BounceAnimatedBtn>
          <a className="rv-2-video__btn" role="button" onClick={openVideoModal}>
            <i className="fa-solid fa-sharp fa-play"></i>
          </a>
        </BounceAnimatedBtn>
      </div>
    </DivAnimateYAxis>
  );
};

export default VideoSection2;
