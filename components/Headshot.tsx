import Picture from "./Picture";
import { WeirMark } from "./WeirLattice";
import type { TeamMember } from "@/lib/team";

/*
 * Uniform headshot card (§4A req 4). Every member gets the same 4:5 frame and
 * card treatment so the team reads as one set. When photo consent is not
 * confirmed, a neutral navy placeholder is shown instead of a photo (§15 #2).
 */
export default function Headshot({ member }: { member: TeamMember }) {
  const hasPhoto = member.photoConsent && Boolean(member.photoBase);

  return (
    <div className="who-photo">
      {hasPhoto ? (
        <Picture
          base={member.photoBase as string}
          widths={[560]}
          sizes="(max-width: 880px) 100vw, 33vw"
          alt={`${member.name}, ${member.role}`}
          width={560}
          height={700}
          className="who-photo__pic"
          imgClassName="who-photo__img"
        />
      ) : (
        <>
          <WeirMark size={44} />
          <span className="who-photo__note">
            {member.photoConsent ? "Headshot to come" : "Photo pending consent"}
          </span>
        </>
      )}
    </div>
  );
}
