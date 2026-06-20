interface Env {
  GAS_URL: string;
}

const json = (data: object, status = 200): Response =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const onRequestPost = async ({
  request,
  env,
}: {
  request: Request;
  env: Env;
}): Promise<Response> => {
  try {
    const formData = await request.formData();

    if (formData.get('website')) return json({ ok: true });

    const required = [
      'teamName', 'captainName', 'captainWhatsapp', 'captainNick',
      'player1Name', 'player1Nick',
      'player2Name', 'player2Nick',
      'player3Name', 'player3Nick',
      'player4Name', 'player4Nick',
      'player5Name', 'player5Nick',
    ];

    for (const field of required) {
      if (!formData.get(field)?.toString().trim()) {
        return json({ error: `Missing required field: ${field}` }, 400);
      }
    }

    const gasUrl = env.GAS_URL;
    if (!gasUrl) return json({ error: 'Registration service unavailable' }, 503);

    const params = new URLSearchParams();
    formData.forEach((val, key) => {
      if (typeof val === 'string') params.append(key, val);
    });

    try {
      await fetch(gasUrl, {
        method: 'POST',
        body: params,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
    } catch {
      return json({ error: 'Could not reach registration service' }, 502);
    }

    return json({ ok: true });
  } catch {
    return json({ error: 'Server error' }, 500);
  }
};
