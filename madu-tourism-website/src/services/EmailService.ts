/** Placeholder email service — wire to a real provider later. */
export async function sendInquiryEmail(payload: {
  name: string;
  email: string;
  message: string;
}): Promise<{ ok: boolean }> {
  void payload;
  return { ok: true };
}
