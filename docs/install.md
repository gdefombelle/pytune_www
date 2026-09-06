✅ Tu as adapter-node ➝ SSR activé

✅ Tu fais npm run build ➝ SvelteKit génère un dossier build/

✅ Tu exécutes node build ➝ Lance ton app

✅ Build et push  docker

# 1. Construire l'image localement
docker build -t gdefombelle/pytune_web:latest .
# 2. Pusher sur Docker Hub
docker push gdefombelle/pytune_web:latest

✅ Côté serveur Hetzner (pull + run)
# 1. Récupérer l’image
docker pull gdefombelle/pytune_web:latest

# 2. Lancer le container
docker run -d \
  --name pytune_web \
  --network pytune_network \
  -p 3000:3000 \
  --restart always \
  gdefombelle/pytune_web:latest

  ✅ 🔐 Configuration Nginx (/etc/nginx/conf.d/pytune.com.conf)
 # Redirection HTTP vers HTTPS
server {
    listen 80;
    server_name pytune.com www.pytune.com;
    return 301 https://$host$request_uri;
}

# Serveur HTTPS
server {
    listen 443 ssl;
    server_name pytune.com www.pytune.com;

    ssl_certificate /etc/letsencrypt/live/pytune.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/pytune.com/privkey.pem;

    location / {
        proxy_pass http://pytune_web:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

🧩 N’oublie pas de faire :
sudo ln -s /etc/nginx/sites-available/pytune.com.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

ln -s	Active le fichier de config
nginx -t	Vérifie que la config est correcte
systemctl reload	Recharge la config sans couper le service