export class Utility {
  public static toStaticImageUrl(path: string): string {
    return `${window.location.origin}${path}`;
  }
}
