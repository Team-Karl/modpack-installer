import type { Profile } from "./profile"
import { mccPrivateProfile, mccProfile } from "./profiles/mcc/mcc"

export const profiles: Profile[] = [mccProfile, mccPrivateProfile]

export const getProfileByKey = (key: string): Profile | undefined =>
    profiles.find((profile) => profile.active && profile.key === key)

export const getStaticProfilePaths = () =>
    profiles
        .filter((profile) => profile.active)
        .map(({ key }) => ({ params: { key } }))
