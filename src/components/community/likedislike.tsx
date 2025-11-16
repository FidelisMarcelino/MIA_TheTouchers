import { useState } from "react";
import { Row, Typography } from "antd";
import { LikeFilled, DislikeFilled } from "@ant-design/icons";

const { Text } = Typography;

type Props = {
  likes: number;
  dislikes: number;
};

const LikeDislikeRow = ({ likes, dislikes }: Props) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  return (
    <Row justify="space-between" align="middle" style={{ gap: 16, width: "100%" }}>
      <Text
        style={{ fontSize: "20px", padding: "10px", cursor: "pointer" }}
        onClick={() => {
            if (!liked) {
                if(!disliked){
                    setLikeCount(likeCount + 1);
                    setLiked(true);
                }
            
          }}}
      >
        <LikeFilled /> {likeCount}
      </Text>

      <Text
        style={{ fontSize: "20px", padding: "10px", cursor: "pointer" }}
        onClick={() => {
          if (!disliked) {
            if(!liked){
                setDislikeCount(dislikeCount + 1);
                setDisliked(true);
            }
            
          }
        }}
      >
        <DislikeFilled /> {dislikeCount}
      </Text>
    </Row>
  );
};

export default LikeDislikeRow;