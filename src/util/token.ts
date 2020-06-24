import Cookie from 'js-cookie';

import * as cfg from '../../config.json';

export interface Token {
  limit: Date;
  value: string;
}

export const readToken = (name: string): Token => {
  return Cookie.getJSON(name);
};

export const saveToken = (name: string, value: string): string => {
  const domain = cfg.Cookie.Domain
      , secure = cfg.Cookie.Secure
      , expires = cfg.Cookie.Expires
      ;
  if (value === undefined) {
    Cookie.remove(name, { domain });
  } else {
    // NOTE:
    // The value should contain only first 2 parts of
    // `heaher.payload.signature`.
    const parts: string[] = value.split('.', 2);
    if (parts.length !== 2) {
      console.error('invalid token');
    } else {
      // e.g. expires: 1 / 8 (0.125) * 864e+5 / 1000 / 60 = 180.0 (3h)
      const token: Token = {
        value: parts.slice(0, 2).join('.')
      , limit: new Date((new Date()).getTime() + (expires * 864e+5))
      };

      let attributes: Cookie.CookieAttributes = {
        domain
      , expires: token.limit
      , secure
      };
      // See: https://github.com/js-cookie/js-cookie/issues/276
      attributes = Object.assign(attributes, {
        sameSite: 'Strict'
      });

      Cookie.set(name, token, attributes as any);
    }
  }
  return value;
};
