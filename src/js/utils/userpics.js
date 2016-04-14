import userInfo from "../utils/user-info";

export const defaultPic = "https://freefeed.net/img/default-userpic-48.png";
const picRegistry = new Map;

async function picLoad(username) {
    let inf = await userInfo(username);
    let p = inf.users.profilePictureMediumUrl;
    return (p && p !== "") ? p : defaultPic;
}

export function getPic(username) {
    if (!picRegistry.has(username)) {
        picRegistry.set(username, picLoad(username));
    }
    return picRegistry.get(username);
}

export function setPic(username, pic) {
    picRegistry.set(username, Promise.resolve((pic && pic !== "") ? pic : defaultPic));
}
