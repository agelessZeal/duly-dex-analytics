import { Avatar } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import { makeStyles } from "@material-ui/core/styles";
import { toChecksumAddress } from "web3-utils";
import { useMemo } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(2),
    // background: "transparent",
    color: theme.palette.text.secondary,
  },
}));

export default function TokenIcon({ id, ...rest }) {
  const classes = useStyles();
  const src = useMemo(
    () =>
      `https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/${toChecksumAddress(
        id
      )}/logo.png`,
    [id]
  );
  if(toChecksumAddress(id) === toChecksumAddress('0xe35aa1a17779d253236343ad0a6f5a5d8e71cb5b')){
    return <Avatar classes={{ root: classes.root }} src={'/duly.png'} {...rest} />;
  }
  return <Avatar classes={{ root: classes.root }} src={src} {...rest} />;
}
