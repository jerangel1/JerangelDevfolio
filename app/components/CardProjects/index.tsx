import React, { Fragment } from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Fl = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
`;

const Fullscreen = styled.div`
  cursor: pointer;
`;

const FullscreenSvg = styled.svg`
  width: 24px;
  height: 24px;
`;

const CardContent = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }

  & .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  & input:checked + .slider {
    background-color: #2196F3;
  }

  & input:checked + .slider:before {
    transform: translateX(14px);
  }
`;

const CardBack = styled.div`
  height: 50px;
  background-color: #f8f8f8;
`;

const Data = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

const Img = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextM = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const TextS = styled.div`
  font-size: 12px;
  color: #888;
`;

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
`;

const Likes = styled.div`
  display: flex;
  align-items: center;
`;

const LikesSvg = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

const LikesText = styled.span`
  font-size: 14px;
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
`;

const CommentsSvg = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

const CommentsText = styled.span`
  font-size: 14px;
`;

const CardProject = () => {
  return (
    <Fragment>
      <Main>
        <Card>
          <Fl>
            <Fullscreen>
              <FullscreenSvg viewBox="0 0 100 100" className="fullscreen_svg">
                <path d="M3.563-.004a3.573 3.573 0 0 0-3.527 4.09l-.004-.02v28.141c0 1.973 1.602 3.57 3.57 3.57s3.57-1.598 3.57-3.57V12.218v.004l22.461 22.461a3.571 3.571 0 0 0 6.093-2.527c0-.988-.398-1.879-1.047-2.523L12.218 7.172h19.989c1.973 0 3.57-1.602 3.57-3.57s-1.598-3.57-3.57-3.57H4.035a3.008 3.008 0 0 0-.473-.035zM96.333 0l-.398.035.02-.004h-28.16a3.569 3.569 0 0 0-3.57 3.57 3.569 3.569 0 0 0 3.57 3.57h19.989L65.323 29.632a3.555 3.555 0 0 0-1.047 2.523 3.571 3.571 0 0 0 6.093 2.527L92.83 12.221v19.985a3.569 3.569 0 0 0 3.57 3.57 3.569 3.569 0 0 0 3.57-3.57V4.034v.004a3.569 3.569 0 0 0-3.539-4.043l-.105.004zM3.548 64.23A3.573 3.573 0 0 0 .029 67.8v28.626-.004l.016.305-.004-.016.004.059v-.012l.039.289-.004-.023.023.121-.004-.023c.074.348.191.656.34.938l-.008-.02.055.098-.008-.02.148.242-.008-.012.055.082-.008-.012c.199.285.43.531.688.742l.008.008.031.027.004.004c.582.461 1.32.742 2.121.762h.004l.078.004h28.61a3.569 3.569 0 0 0 3.57-3.57 3.569 3.569 0 0 0-3.57-3.57H12.224l22.461-22.461a3.569 3.569 0 0 0-2.492-6.125l-.105.004h.008a3.562 3.562 0 0 0-2.453 1.074L7.182 87.778V67.793a3.571 3.571 0 0 0-3.57-3.57h-.055.004zm92.805 0a3.573 3.573 0 0 0-3.519 3.57v19.993-.004L70.373 65.328a3.553 3.553 0 0 0-2.559-1.082h-.004a3.573 3.573 0 0 0-3.566 3.57c0 1.004.414 1.91 1.082 2.555l22.461 22.461H67.802a3.57 3.57 0 1 0 0 7.14h28.606c.375 0 .742-.059 1.082-.168l-.023.008.027-.012-.02.008.352-.129-.023.008.039-.02-.02.008.32-.156-.02.008.023-.016-.008.008c.184-.102.34-.207.488-.32l-.008.008.137-.113-.008.004.223-.211.008-.008c.156-.164.301-.34.422-.535l.008-.016-.008.016.008-.02.164-.285.008-.02-.008.016.008-.02c.098-.188.184-.406.246-.633l.008-.023-.004.008.008-.023a3.44 3.44 0 0 0 .121-.852v-.004l.004-.078V67.804a3.569 3.569 0 0 0-3.57-3.57h-.055.004z"></path>
              </FullscreenSvg>
            </Fullscreen>
          </Fl>
          <CardContent>
            <Switch>
              <input type="checkbox" />
              <span className="slider"></span>
            </Switch>
          </CardContent>
          <CardBack />
        </Card>
        <Data>
          <Img>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 80 80">
              <g strokeWidth="2.00" fill="none" strokeLinecap="butt">
                <path stroke="#59afb1" d="M 48.45,8.82 C 48.11,8.34 47.59,8.00 47.00,8.00C 46.41,8.00 45.89,8.34 45.55,8.82"></path>
                <path stroke="#666666" d="M 46.59,8.82 C 46.23,8.34 45.71,8.00 45.11,8.00C 44.52,8.00 44.00,8.34 43.65,8.82"></path>
                <path stroke="#666666" d="M 48.00,32.00 C 48.00,28.22 44.64,25.00 40.00,25.00C 35.36,25.00 32.00,28.22 32.00,32.00C 32.00,35.78 35.36,39.00 40.00,39.00C 44.64,39.00 48.00,35.78 48.00,32.00 Z"></path>
              </g>
            </svg>
          </Img>
          <Text>
            <TextM>Some text here</TextM>
            <TextS>More detailed information here</TextS>
          </Text>
        </Data>
        <Btns>
          <Likes>
            <LikesSvg viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </LikesSvg>
            <LikesText>100</LikesText>
          </Likes>
          <Comments>
            <CommentsSvg viewBox="0 0 24 24">
              <path d="M21 6h-3.17A3.001 3.001 0 0 0 15 4H9a3.001 3.001 0 0 0-2.83 2H3v15h18V6zm-2 13H5V8h2.17c.42-1.16 1.52-2 2.83-2h6c1.31 0 2.41.84 2.83 2H19v11zm-6-3v-2h-2v2H8l4 4 4-4h-3z"></path>
            </CommentsSvg>
            <CommentsText>50</CommentsText>
          </Comments>
        </Btns>
      </Main>
    </Fragment>
  );
};

export default CardProject;
